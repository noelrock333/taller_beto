import React, { useContext } from 'react';
import Router from './Router';
import PublicRouter from './PublicRouter';
// import Auth from './global_state/auth';

function Transito() {
  // let jwt = localStorage.getItem('jwt');
  let jwt = 'token_dasdasdas';
  console.log('jwt', jwt);
  
  return jwt ? <Router /> : <PublicRouter/>;
}

export default Transito;