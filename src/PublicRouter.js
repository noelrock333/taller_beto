import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import 'antd/dist/antd.css'; 

class MyRouter extends React.Component { 
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login} />
      </Router>
    );
  }
}

export default MyRouter;