import React, {Component} from 'react';
import axios from 'axios';

class EventHighlights extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            eventsList : []
        }

        //bind 

        this.getEventsList = this.getEventsList.bind(this);
    }

    componentDidMount() {
        this.getEventsList();
    }

    getEventsList = () => {
        console.log('getWinners List');
        let eventsListResponse = [];
        // axios.get()
        //     .then((response) => {
        //         eventsListResponse = response.data;
        //     });
        eventsListResponse = [
            'Farmers Market',
            'Borathon',
            'Beer Bash',
            'Intern Poster session'
        ];

        this.setState({
            eventsList : eventsListResponse
        });
    }
    
    render(){

        let eventsList = this.state.eventsList.map((event, index) => {
            return (
                <p key={index}>{event}</p>
            )            
        });


        return (
            <div className="border mb-5 pt-3 pl-5 pr-5 event-highlights-container">
                <h4>Events List</h4>
                <div className="list-group">
                    {eventsList}
                </div>
            </div>
        )
    }
}

export default EventHighlights;