import React from 'react';
import { Link } from 'react-router-dom';


class BetoComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>BetoComponent</h1>
        <Link to="/">Ir al index</Link>
      </div>
    );
  }
}

export default BetoComponent;
