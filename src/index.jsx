/*
  index.jsx
*/

import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary";
import Article from "./components/Article";
import testArticle from "./data/testArticle.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <ErrorBoundary>
        <Article article={testArticle} />
      </ErrorBoundary>
    </div>
  </React.StrictMode>
);
