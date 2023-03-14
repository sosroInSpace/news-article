/*
  Article.jsx
*/

import ArticleBlock from "../ArticleBlock";

import "./Article.scss";

/**
 * Renders an article object.
 *
 * @param {Object} article.
 */
function Article({ article }) {

  const articleDate = article.publicationDate && new Date(article.publicationDate);

  return (
    <article className="Article">

      {
        // Article headline.
        Boolean(article.headline) &&
        <section>
          <h1 className="article-headline">{article.headline}</h1>
        </section>
      }

      {
        // Article byline and source.
        Boolean(article.byline || article.source) &&
        <section>
          { Boolean(article.byline) && <strong>{article.byline}</strong> }
          { Boolean(article.byline && article.source) && <span>{" — "}</span> }
          { Boolean(article.source) && <em>{article.source}</em> }
        </section>
      }

      {
        // Article date. Render if the date exists and is valid.
        Boolean(articleDate) && !isNaN(articleDate.getTime()) &&
        <section>
          {
            articleDate.toLocaleString("en-AU", {
              weekday: "short",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }).replace(" at", ",")
          }
        </section>
      }

      {
        // Article content.
        Boolean(article.blocks) && article.blocks.map((block, i) =>
          <section key={i}>
            <ArticleBlock block={block} />
          </section>
        )
      }

    </article>
  );
}

export default Article;
