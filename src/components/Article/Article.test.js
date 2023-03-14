/*
  Article.test.js
*/

import React from "react";
import { render, screen } from "@testing-library/react";
import Article from "./Article";

const mockArticle = {
  "headline": "Mock Headline",
  "byline": "Mock Author",
  "source": "Mock Source",
  "publicationDate": "2022-03-13T09:30:00.000Z",
  "blocks": [
    {
      "kind": "text",
      "text": "This is a mock article with ",
      "intentions": [
        {
          "kind": "emphasized",
          "index": 26,
          "length": 6
        }
      ]
    },
    {
      "kind": "image",
      "url": "https://via.placeholder.com/150",
      "captionText": "Mock Image"
    },
    {
      "kind": "pull-quote",
      "text": "Mock Quote",
      "attribution": "Mock Attribution"
    }
  ]
};

describe("Article", () => {

  it("does not render source if it does not exist", () => {
    const articleWithoutSource = { ...mockArticle, source: null };
    render(<Article article={articleWithoutSource} />);
    expect(screen.queryByText("Mock Source")).toBeNull();
  });

});
