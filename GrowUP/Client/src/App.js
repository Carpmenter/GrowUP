import React from 'react';
import Chart from './Chart';
import Accounts from './Accounts';
import Expenses from './Expenses';
import Earnings from './Earnings';
import Navigation from './Navigation';
import Callback from './Callback';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import Unauthorized from './Unauthorized';



class App extends React.Component {

    getUser(){
        let profile = auth0Client.getProfile();
    }
    // public async componentDidMount() {
    //     const result = await fetch('https://localhost:44348/api/user');
    //     const users = await result.json();
    //     this.setState({ users });
    // }



    render(){
        // Uncomment for authorized rendering
        if (!auth0Client.isAuthenticated()){
            return (
                <div id="content">
                    <header>
                        <Navigation />
                        <Route exact path='/callback' component={Callback} />
                    </header>
                    <main>
                        <Unauthorized />
                    </main>
                </div>
            );
        }
        
        return (
            <div id="content">
            <header>
                <Navigation />
                <Route exact path='/callback' component={Callback} />
            </header>
            <main>
                <div id="main" className="container-fluid">
                    <div className="row justify-content-center">
                        <Chart />
                        <Accounts />
                    </div>
                    <div className="row justify-content-center">
                        <Expenses />
                        <Earnings />
                    </div>
                </div>
            </main>
        </div>
        );
    }
}

export default withRouter(App);