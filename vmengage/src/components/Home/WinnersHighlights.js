import React, {Component} from 'react';

class WinnersHighlights extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        return (
            <div className="mt-5 border p-5 winners-highlights-container">
                <h1> Winners Highlights Component</h1>
            </div>
        )
    }
}

export default WinnersHighlights;