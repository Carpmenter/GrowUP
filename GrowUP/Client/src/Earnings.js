import React from 'react';
import {withRouter} from 'react-router-dom';

class Earnings extends React.Component {

    render(){
        return (
            <div id="earnings" className="col-md-5 mx-3 my-3">
                <div className="container-fluid">Earnings</div>
            </div>
        );
    }
}

export default withRouter(Earnings);