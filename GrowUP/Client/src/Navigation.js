import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';

function Navigation(props) {

    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="hdr">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" id="nav-button">Fix Formatting</span>
            </button>
            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav">
                <li className="nav-item px-1">
                    <a className="nav-link" href="#">Dashboard</a>
                </li>
                <li className="nav-item px-1">
                    <a className="nav-link" href="#">Transactions</a>
                </li>
                {
                    !auth0Client.isAuthenticated() &&
                    <button className="btn btn-light" onClick={auth0Client.signIn}>Sign In</button>
                }
                {
                    auth0Client.isAuthenticated() &&
                    <div>
                        <li className="nav-item px-1">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li>
                            <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
                        </li>
                    </div>
                }
                </ul>
            </div>
            <a className="navbar-brand" href="#">
                <img src="./images/logo3.png" id="logo"/>
            </a>
        </nav>
    );
}

export default withRouter(Navigation);