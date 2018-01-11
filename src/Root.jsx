import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from 'config';

const root = (
  <BrowserRouter>
    {renderRoutes( routes )}
  </BrowserRouter>
);

ReactDOM.render( root, document.getElementById( 'root' ));
