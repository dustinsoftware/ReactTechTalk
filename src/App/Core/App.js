import React from 'react';
import Router from 'react-router';
import routes from './Routes';
import Home from '../Views/Home.js';

Router.run(routes, (Handler) => React.render(<Handler /> , document.body));
