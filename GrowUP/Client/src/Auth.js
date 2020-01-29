import auth0 from 'auth0-js';
import { AuthConfig } from './AuthConfig';

class Auth {

    constructor() {

        this.auth0 = new auth0.WebAuth({
            domain: AuthConfig.domain,
            clientID: AuthConfig.clientID,
            redirectUri: AuthConfig.redirectUri,
            audience: AuthConfig.audience,
            responseType: 'token id_token',
            scope: 'openid'
          });

        this.getProfile = this.getProfile.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    getProfile() {
        return this.profile;
    }

    getIdToken() {
        return this.idToken;
    }

    isAuthenticated = () => {
        return new Date().getTime() < this.expiresAt;
    }

    signIn() {
        this.auth0.authorize();
    }

    handleAuthentication = () => {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                this.idToken = authResult.idToken;
                this.profile = authResult.idTokenPayload;
                this.expiresAt = authResult.idTokenPayload.exp * 1000;
                resolve();
            });
        }); //semi-colon not needed?
    }

    signOut() {
        // clear token and profile info
        this.idToken = null;
        this.profile = null;
        this.expiresAt = null;
    }

}

const auth0Client = new Auth();

export default auth0Client;