import React from 'react';
import './App.css';
import CssPage from './components/CssPage';
import HtmlPage from './components/HtmlPage';
import HomePage from './components/HomePage';
import JavaScriptPage from './components/JavaScriptPage';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <Router>
      <div className="App">
        <header>
          <div className="site-name">An Introduction to Web Technologies</div>
        </header>
        <nav>
          <ul>
            <li><NavLink exact to="/">Welcome</NavLink></li>
            <li><NavLink to="/html">HTML</NavLink></li>
            <li><NavLink to="/css">CSS</NavLink></li>
            <li><NavLink to="/js">JavaScript</NavLink></li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/html">
              <HtmlPage />
            </Route>
            <Route path="/css">
              <CssPage />
            </Route>
            <Route path="/js">
              <JavaScriptPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
