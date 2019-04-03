import React from 'react';

class Navigation extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="hdr">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="nav-button">Fix Formatting</span>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav">
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">Transactions</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="#">
                    <img src="./images/logo3.png" id="logo"/>
                </a>
            </nav>
        );
    }
}

export default Navigation;