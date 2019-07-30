import React, {Component} from 'react';

class EventHighlights extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        return (
            <div className="border mb-5 p-5 event-highlights-container">
                <p> Event EventHighlights Component</p>
            </div>
        )
    }
}

export default EventHighlights;