import React, {Component} from 'react';
import {Pie, Bar, Line, Doughnut} from 'react-chartjs-2';
import Header from '../Header/Header';

class EventDetails extends Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            chartData: {},
            
        }
    }

    componentDidMount() {
        this.getChartData();
    }

    getChartData = () => {

        let resultArr = [100, 45, 70];

        var chartData = {
            labels: [
              "BU 1",
              "BU 2",
              "BU 3"
              // "Springfield",
              // "Lowell",
              // "Cambridge",
              // "New Bedford"
            ],
            datasets: [
              {
                label: "Mock Chart",
                data: resultArr,
                backgroundColor: [
                 // "rgba(0, 123, 182, 0.8)",
                  // "rgba(236, 85, 85, 0.8)",
                //   "rgba(124,252,0, 0.8)",
                //    "rgba(75, 192, 192, 0.8)",
                //    "rgba(153, 102, 255, 0.8)",
                //    //"rgba(15, 159, 64, 0.8)",
                  // "rgba(15, 99, 132, 0.8)"
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
              }
            ]
          }
          this.setState({
            chartData : chartData
          });
    }


    
    render(){
        return (
            <div>
                <Header/>
                <div className="">

                
                    <div className="container">
                        <div className="m-5">
                            <div>
                                <h4>Description</h4>
                            </div>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="row mt-5 border-bottom p-5">
                        <div className="col-2">

                        </div>
                        <div className="col-4 border-right">
                            <div>
                                <Pie data={this.state.chartData}/>
                            </div>
                        </div>
                        <div className="col-4">
                        <Bar data = {this.state.chartData} />
                        </div>

                    </div>
                    <div className="row mt-5 p-5">
                    <div className="col-2">

                    </div>
                    <div className="col-4 border-right">
                        <Line data = {this.state.chartData} />
                    </div>
                    <div className="col-4">
                        <Doughnut data={this.state.chartData} />
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}

export default EventDetails;