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

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/home');
            } else if (err) {
                history.replace('/home');
                console.log(err);
            }
        });
    }

    // saves user info in localStorage
    setSession = (authResult) => {
        // setting time access token expires
        let expiresAt = JSON.stringify((authResult.expiresAt * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        history.replace('/home');
    }
    
      // removes user details from localStorage
    logout = () => {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/home');
    }

    isAuthenticated = () => {
        //verifying access token has expired
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}