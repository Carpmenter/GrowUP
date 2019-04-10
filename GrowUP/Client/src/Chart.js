import React from 'react';
import {withRouter} from 'react-router-dom';


class Chart extends React.Component {

    render(){

        return (
            <div id="chart" className="col-md-7 mx-3 my-3">
                <div className="container-fluid">BudgetChart</div>
            </div>
        );
    }
}

export default withRouter(Chart);