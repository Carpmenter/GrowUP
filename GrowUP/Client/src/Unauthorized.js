import React from 'react';
import auth0Client from './Auth';
import {withRouter} from 'react-router-dom';


function Unauthorized(){

    if (!auth0Client.isAuthenticated()){
        return (
            <div className="container-fluid " id="unauth">
                <div className="row py-3">
                    <div>To access features of GrowUP you must be logged in.</div>
                    <div>
                        <button className="btn btn-light" onClick={auth0Client.signIn}>Sign In</button>
                    </div>
                </div>
                <div className="row py-3">
                    <div>Need an Account?</div>
                    <div>
                        <button className="btn btn-light" onClick={auth0Client.signIn}>Sign UP</button>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}


export default withRouter(Unauthorized);