import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import BetoComponent from './components/BetoComponent';

class MyRouter extends React.Component { 
  render() {
    return (
      <Router>
        <Route path="/" exact component={App} />
        <Route path="/beto" component={BetoComponent} />
      </Router>
    );
  }
}

export default MyRouter;