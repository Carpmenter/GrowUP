import React from 'react';
import {withRouter} from 'react-router-dom';

/* API Key: SDLLR8OP6L3RA1Q4 */

class Earnings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            stock: [],
            price: []
        }
    };

    componentDidMount(){
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SHOP&apikey=SDLLR8OP6L3RA1Q4')
        .then(result => result.json())
        .then((result) => {
            let meta = result['Meta Data'];
            let daily = result['Time Series (Daily)'];
            this.setState({stock: JSON.stringify(meta['2. Symbol']), price: JSON.stringify(daily['2019-10-04'])});
        })
        .catch(console.log)
    }

    render(){

        return (
            <div id="earnings" className="col-md-5 mx-3 my-3">
                <div className="container-fluid">
                    <div>Stock: {this.state.stock}</div>
                    <div>Price: {this.state.price}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Earnings);