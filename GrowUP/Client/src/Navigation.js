import React from 'react';
import {Link, withRouter, ReactDOM} from 'react-router-dom';
import auth0Client from './Auth';

function Navigation(props) {

    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="hdr">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" id="nav-button"></span>
            </button>
            <a className="navbar-brand" href="#">
                <img src="./images/logo3.png" id="logo"/>
            </a>
            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="/transactions">Transactions</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="/invest">Invest</a>
                    </li>
                    <li className="nav-item px-1">
                            <a className="nav-link" href="/profile">Profile</a>
                    </li>
                    {
                        !auth0Client.isAuthenticated() &&
                        <li className="nav-item px-1">
                            <button className="btn btn-light" onClick={auth0Client.signIn}>Sign In</button>
                        </li>
                    }
                    {
                        auth0Client.isAuthenticated() &&
                        <li className="nav-item px-1">
                            <button className="btn btn-light" onClick={() => {signOut()}}>Sign Out {auth0Client.getProfile().name}?</button>
                        </li>
                    }
                </ul>
            </div>
        </nav>
        
    );
}

export default withRouter(Navigation);