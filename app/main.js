import React from 'react';
import {render} from 'react-dom';
import App from './App';
import styles from './Main.css';


import { Router, Route, IndexRoute, Link } from 'react-router';
import { hashHistory } from 'react-router'

import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';
import ServerError from './ServerError';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About} title="About Us"/>
            <Route path="repos" component={Repos}>
                {/* Add the route, nested where we want the UI to nest */}
                <Route path="/repo/:repo_name" component={RepoDetails} />
            </Route>
            <Route path="error" component={ServerError} />
        </Route>
    </Router>
), document.getElementById('root'));
