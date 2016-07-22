import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './main.css';


import { Router, Route, IndexRoute, Link } from 'react-router';
import { hashHistory } from 'react-router'

import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="repos" component={Repos}>
                {/* Add the route, nested where we want the UI to nest */}
                <Route path="details/:repo_name" component={RepoDetails} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));
