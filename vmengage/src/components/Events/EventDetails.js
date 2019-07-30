import React, {Component} from 'react';

class EventDetails extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        return (
            <div>
                <h1> Event Details Page</h1>
            </div>
        )
    }
}

export default EventDetails;