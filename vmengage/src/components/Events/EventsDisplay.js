import React, {Component} from 'react';

class EventsDisplay extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        return (
            <div>
                <h1> Event Display Page</h1>
            </div>
        )
    }

}

export default EventsDisplay;