import React from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';


class Chart extends React.Component {

    render(){

        let content;

        if (!auth0Client.isAuthenticated()){
            auth0Client.signIn();
            content = <div></div>;
        } else {
            content = (
                <div id="chart" className="col-md-7 mx-3 my-3">
                    <div className="container-fluid">BudgetChart</div>
                </div>
            );
        }





        return ( {content}
            // <div id="chart" className="col-md-7 mx-3 my-3">
            //     <div className="container-fluid">BudgetChart</div>
            // </div>
        );
    }
}

export default withRouter(Chart);