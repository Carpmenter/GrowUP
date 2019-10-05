import React from 'react';
import Chart from './Chart';
import Accounts from './Accounts';
import Expenses from './Expenses';
import Earnings from './Earnings';
import Navigation from './Navigation';
import Callback from './Callback';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import Unauthorized from './Unauthorized';



class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {user : '', profile : auth0Client.getProfile() }
        
    }

    async componentDidMount() {
        //const result = await fetch('https://localhost:44369/api/user');
        //const users = await result.json();
        this.setState({ user : 'boy'});
        console.log(this.state.profile);
    }

    async componentDidUpdate(){
        // if (this.state.profile == undefined){
        //     this.setState({profile : auth0Client.getProfile()});
        // }
        console.log(this.state.profile);
    }

    render(){
        // Uncomment for authorized rendering
        // if (!auth0Client.isAuthenticated()){
        //     return (
        //         <div id="content">
        //             <header>
        //                 <Navigation />
        //                 <Route exact path='/callback' component={Callback} />
        //             </header>
        //             <main>
        //                 <Unauthorized />
        //             </main>
        //         </div>
        //     );
        // }

        return (
            <div id="content">
            <header>
                <Navigation />
                <Route exact path='/callback' component={Callback} />
            </header>
            <main>
                <div id="main" className="container-fluid">
                    <div className="row justify-content-center">
                        <Chart />
                        <Accounts />
                    </div>
                    <div className="row justify-content-center">
                        <Expenses profile={this.state.profile}/>
                        <Earnings />
                    </div>
                    <div>
                    </div>
                </div>
            </main>
        </div>
        );
    }
}

export default withRouter(App);