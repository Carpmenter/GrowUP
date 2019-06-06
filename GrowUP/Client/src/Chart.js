import React from 'react';
import {withRouter} from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';


class Chart extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //this.props.chartSize = document.getElementById('chart').offsetWidth;
        //console.log(this.props.chartSize);
    }

    render(){

        var chartData = {
            labels: ['Bills', 'Entertainment', 'Investments', 'Groceries'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        };

        //var chartSize = document.getElementById('chart').offsetWidth;

        return (
            <div id="chart" className="col-md-7 mx-3 my-3">
                <div className="container-fluid fill">
                    <div className="row pt-5">
                        <div id="chart-data" className="col-lg mr-2">
                            <Doughnut
                                data={chartData}
                                width={350}
                                height={350}
                                options={{ maintainAspectRatio: false }}
                            />
                        </div>
                        <div id="chart-table" className="col-lg ml-2">March Total Spending</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Chart);