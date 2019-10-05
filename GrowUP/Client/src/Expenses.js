import React from 'react';
import {withRouter} from 'react-router-dom';

class Expenses extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div id="expenses" className="col-md-5 mx-3 my-3">
                <div className="container-fluid">Hello </div>
            </div>
        );
    }
}

export default withRouter(Expenses);