import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class WinnersHighlights extends Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            winnersList : []
        }

        //bind 

        this.getWinnersList = this.getWinnersList.bind(this);
    }

    componentDidMount() {
        this.getWinnersList();
    }


    getWinnersList = () => {
        console.log('getWinners List');
        let winnersListResponse = [];
        // axios.get()
        //     .then((response) => {
        //         winnersListResponse = response.data;
        //     });
        winnersListResponse = [
            'Hari',
            'Shubham',
            'Adithya',
            'Ayush',
            'Hari',
            'Shubham',
            'Adithya',
            'Ayush'
        ];

        this.setState({
            winnersList : winnersListResponse
        });
    }

    
    render(){

        let winnersList = this.state.winnersList.map((winner, index) => {
            return (
                <li key={index} className="mt-2 blue-text">{winner}</li>
            )            
        });

        return (
            <div className="mt-5 border p-3 winners-highlights-container">
                <h4 className="blue-text">Winners List <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="float-left float-md-none mr-2 mr-md-0"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></h4>
                <div className="list-group">
                    <ol>
                        {winnersList}
                    </ol>   
                    
                </div>
            </div>
        )
    }
}

export default WinnersHighlights;