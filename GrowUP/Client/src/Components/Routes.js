import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from './Callback';
import Auth from './auth';
import history from './history';

const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//     if (/access_token|id_token|error/.test(nextState.location.hash)) {
//       auth.handleAuthentication();
//     }
//   }

const Routes = () => (
    <div></div>
);

export default Routes;