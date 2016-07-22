import React, {Component} from 'react';
import styles from './App.css';
import { render } from 'react-dom';

import { Router, Route, Link } from 'react-router';

import About from './About';
import Home from './Home';
import Repos from './Repos';

class App extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div>
        <header><Link to="/">App</Link></header>
        <menu>
          <ul>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/repos" activeClassName="active">Repos</Link></li>
          </ul>
        </menu>
        {this.props.children}
      </div>
    );
  }


}

export default App
