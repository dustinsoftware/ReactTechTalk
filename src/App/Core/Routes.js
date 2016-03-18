import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import Layout from './Layout';
import Home from '../Views/Home';
import GifSearch from '../Views/GifSearch';

var routes = (
  <Route name="app" path="/" handler={Layout}>
    <Route name="gifs" handler={GifSearch}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
