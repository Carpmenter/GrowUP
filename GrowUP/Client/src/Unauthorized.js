import React from 'react';
import auth0Client from './Auth';
import {withRouter} from 'react-router-dom';


function Unauthorized(){

    if (!auth0Client.isAuthenticated()){
        return (
            <div>
                Need an Account?
            </div>
        );
    }

    return null;
}


export default withRouter(Unauthorized);