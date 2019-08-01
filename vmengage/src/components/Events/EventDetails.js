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
                            At VMware, Innovation Starts Here! The Intern Program in partnership with Enterprise Data and Analytics is hosting its’ first ever Intern Borathon on Wednesday, July 31 in Creekside C - Darwin and Bohr Conference rooms.
 <br/>
 <br/>
 <b>A Borathon? What’s that? </b><br/>
 Borathon’s are VMware’s internal hackathons and we’re hosting a day-long event just for you! You’ll work together in teams to solve a VMWare problem while getting help from senior engineers, data experts and executive judges in the company.
 <br/>
 <br/> 
 <b>What will we be solving?</b><br/>
 We don’t want to spoil the surprise! But…we can reveal that the theme for the Borathon is “One VMware.”
  <br/>
  <br/>
 <b>Do I need to be technical?</b><br/>
 No! We welcome skills from across VMware from technical and nontechnical backgrounds! We hope that you can join us!
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