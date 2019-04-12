import React from 'react';
import {withRouter} from 'react-router-dom';

class Accounts extends React.Component {
    render() {

        var testAccounts = ["Chase Bank.....1087.99", "Bell Bank.....87.69", "Savings Bell Bank.....6,009.24"];
        const accounts = [];

        for (let i in testAccounts){
            accounts.push(<div className="row acct-row">{testAccounts[i]}</div>);
        }


        return (
            <div id="accounts" className="col-md-4 mx-3 my-3">
                <div className="container-fluid px-0">
                    <div className="row" id="acct-head">Accounts</div>
                    <div className="row">Total Balance</div>
                    {accounts}
                </div>
            </div>
        );
    }
}

export default withRouter(Accounts);