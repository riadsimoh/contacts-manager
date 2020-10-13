import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import AddContact from './components/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header style={{ color: 'red' }} branding="Contact manager" />
            <div className="container">
              <Switch>
                <Route path="/about/:id" component={About} />
                <Route path="/" exact component={Contacts} />
                <Route path="/add" exact component={AddContact} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
