import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import 'antd/dist/antd.css'; 
import BetoComponent from './components/BetoComponent';
import AntLayout from './layouts/AntLayout';

class MyRouter extends React.Component { 
  render() {
    return (
      <Router>
        <AntLayout rol={8}>
          <Route path="/" exact component={BetoComponent} />
          <Route path="/beto" component={BetoComponent} />
        </AntLayout>
      </Router>
    );
  }
}

export default MyRouter;