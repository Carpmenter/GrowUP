import React from 'react';
import {withRouter} from 'react-router-dom';

class Expenses extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: null,
            username: null
        }
    }

    componentDidMount() {

        fetch('https://localhost:44369/Users/1')
            .then(response => response.json())
            .then(data => this.setState({username: data.username, name: data.firstName}));
    }

    render(){
        const { username, name } = this.state;

        return (
            <div id="expenses" className="col-md-5 mx-3 my-3">
                <div className="container-fluid">Hello {name}!</div>
                <div className="container-fluid">Username: {username}</div>
            </div>
        );
    }
}

export default withRouter(Expenses);