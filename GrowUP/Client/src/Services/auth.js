import auth0 from 'auth0-js';
import history from './history';

export default class Auth {

    auth0 = new auth0.WebAuth({
        domain: 'nica-dev.auth0.com',
        clientID: 'Epu3GVscbU3Ld0fZZz4Zcsihv5JBkUW9',
        // redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://carpmenter.github.io/GrowUP-Client/callback',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://nica-dev.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login = () => {
        this.auth0.authorize();
    }

    
}