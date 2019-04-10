import React from 'react';
import Chart from './Chart';
import Accounts from './Accounts';
import Expenses from './Expenses';
import Earnings from './Earnings';
import Navigation from './Navigation';
import Callback from './Callback';
import {Route} from 'react-router-dom';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import auth0Client from './Auth';



class App extends React.Component {
    render(){
        return (
            <div id="content">
            <header>
                <Navigation />
                <Route exact path='/callback' component={Callback} />
            </header>
            <main>
                <div id="main" className="container-fluid">
                    <div className="row">
                    
                        {/* <SecuredRoute path='/dashboard' component={Chart} /> */}
                        <SecuredRoute path='/dashboard' component={Accounts} />
                    </div>
                    <div className="row">
                        <SecuredRoute path='/dashboard' component={Expenses} />
                        <SecuredRoute path='/dashboard' component={Earnings} />
                    </div>
                </div>
            </main>
        </div>
        );
    }
}

export default App;