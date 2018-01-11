import './home.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <p>Home</p>

        <Link to="/about">About</Link>
        <Link to="/xyz">404 page</Link>
      </div>
    );
  }
}

export default Home;
