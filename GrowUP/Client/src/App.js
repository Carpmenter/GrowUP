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
    render(){

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
                    <div className="row">
                        <Chart />
                        <Accounts />
                    </div>
                    <div className="row">
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