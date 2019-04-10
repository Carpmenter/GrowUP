import React from 'react';
import {withRouter} from 'react-router-dom';

class Accounts extends React.Component {
    render() {

        return (
            <div id="accounts" className="col-md-4 mx-3 my-3">
                <div className="container-fluid">Accounts</div>
            </div>
        );
    }
}

export default withRouter(Accounts);