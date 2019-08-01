import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            'Intern Poster session',
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
                <li key={index} className="mt-2 blue-text"><Link to="#">{event}</Link></li>
            )            
        });


        return (
            <div className="border mt-3 mb-5 p-3 event-highlights-container">
                <h4 className="blue-text">Events List <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="float-left float-md-none mr-2 mr-md-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></h4>
                
                <div className="list-group">
                    <ol>
                        {eventsList}
                    </ol>
                   
                </div>
            </div>
        )
    }
}

export default EventHighlights;