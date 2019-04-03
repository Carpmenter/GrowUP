import React from 'react';
import Chart from './Chart';
import Accounts from './Accounts';
import Expenses from './Expenses';
import Earnings from './Earnings';
import Navigation from './Navigation';

class App extends React.Component {
    render(){
        return (
            <div id="content">
            <header>
                <Navigation />
            </header>
            <main>
                <div id="main" className="container-fluid">
                <div className="row">
                    <div id="chart" className="col-md-7 mx-3 my-3">
                        <Chart />
                    </div>
                    <div id="accounts" className="col-md-4 mx-3 my-3">
                        <Accounts />
                    </div>
                </div>
                <div className="row">
                    <div id="expenses" className="col-md-5 mx-3 my-3">
                        <Expenses />
                    </div>
                    <div id="earnings" className="col-md-5 mx-3 my-3">
                        <Earnings />
                    </div>
                </div>
                </div>
            </main>
        </div>
        );
    }
}

export default App;