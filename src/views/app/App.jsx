import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Navbar, Sidebar, Footer } from '../components';


class App extends Component {
  render() {
    const { route } = this.props;

    return (
      <div>
        <Navbar />
        <Sidebar />

        <h1>React Boilerplate</h1>

        {renderRoutes( route.routes )}

        <Footer />
      </div>
    );
  }
}

export default App;
