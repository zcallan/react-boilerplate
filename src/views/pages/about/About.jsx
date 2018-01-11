import './about.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div className="about">
        <p>About</p>

        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;
