/*
  ArticleBlock.jsx
*/

import "./ArticleBlock.scss";

/**
 * Renders a block with areas of text marked by intentions.
 */
function TextWithIntentions({ text, intentions }) {

  text = text || "";
  intentions = intentions || [];

  if (intentions.length === 0) {
    return text;
  }

  // Iterate through the sorted intentions, and add them to an array of elements.
  // If there are positions in-between the intentions, add them as text nodes.

  const blocks = [];
  const sorted = intentions.concat().sort((a, b) => a.index - b.index);
  let pos = 0;

  while (pos < text.length && sorted.length > 0) {

    const item = sorted.shift();
    const itemText = text.slice(item.index, item.index + item.length);

    // Check if there is text in the leadup to this intention.
    // If there is, add it as a block.

    if (pos < item.index) {
      blocks.push(text.slice(pos, item.index));
    }

    switch (item.kind) {

      case "emphasized":
        blocks.push(<em key={item.index}>{itemText}</em>);
        break;

      case "important":
        blocks.push(<strong key={item.index}>{itemText}</strong>);
        break;

      default:
        blocks.push(itemText);

    }

    pos = item.index + item.length;

  }

  // Check if there is any remaining text to add.

  if (pos < text.length) {
    blocks.push(text.slice(pos));
  }

  return blocks;

}

/**
 * Renders a block object within the "article.blocks" array.
 *
 * @param {Object} block.
 */
function ArticleBlock({ block }) {
  return (
    <div className="ArticleBlock">

      {
        block.kind === "text" &&
        <p className="textSection">
          <TextWithIntentions text={block.text} intentions={block.intentions} />
        </p>
      }

      {
        block.kind === "image" &&
        <div className="imageSection">
          <div>
            <img src={block.url} alt={block.captionText} />
          </div>
          <div>
            <em>{block.captionText || ""}</em>
          </div>
        </div>
      }

      {
        block.kind === "pull-quote" &&
        <blockquote>
          <p>{block.text || ""}</p>
          <div>
            <small>{block.attribution || ""}</small>
          </div>
        </blockquote>
      }
      
    </div>
  );
}

export default ArticleBlock;
