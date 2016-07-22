import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './main.css';

import About from './About';
import Home from './Home';
import Repos from './Repos';

import { Router, Route, Link } from 'react-router';
import { hashHistory } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="repos" component={Repos}/>
        </Route>
    </Router>
), document.getElementById('root'));
