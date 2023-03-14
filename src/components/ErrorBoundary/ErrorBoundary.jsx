/*
  ErrorBoundary.jsx
*/

import React from "react";
import "./ErrorBoundary.scss";

/**
 * Component to catch any errors that occur across the app.
 */
class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      error: null
    };

    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log error somewhere here.
  }

  handleReload(event) {
    this.setState({ error: null });
  }

  render() {

    const { error } = this.state;

    if (error) {
      return (
        <div className="ErrorBoundary">
          <h3>An error occurred.</h3>
          <p>{ error.message }</p>
          <div>
            <button type="button" onClick={this.handleReload}>
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;

  }
}

export default ErrorBoundary;
