import './notFound.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <p>404 - Page not found</p>

        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFound;
