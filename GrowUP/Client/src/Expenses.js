import React from 'react';
import {withRouter} from 'react-router-dom';


class Expenses extends React.Component {

    render(){
        return (
            <div id="expenses" className="col-md-5 mx-3 my-3">
                <div className="container-fluid">Expenses</div>
            </div>
        );
    }
}

export default withRouter(Expenses);