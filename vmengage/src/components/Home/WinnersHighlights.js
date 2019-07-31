import React, {Component} from 'react';
import axios from 'axios';

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
                <p key={index}>{winner}</p>
            )            
        });

        return (
            <div className="mt-5 border pt-3 pl-5 pr-5 winners-highlights-container">
                <h3>Winners List</h3>
                <div className="list-group">
                    {winnersList}
                </div>
            </div>
        )
    }
}

export default WinnersHighlights;