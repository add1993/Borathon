import React, {Component} from 'react';
import Header from '../Header/Header';
import WinnersHighlights from './WinnersHighlights';
import EventHighlights from './EventHighlights';


class Home extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="row mt-3">
                    <div className="col-2 border-right">
                        <h1>Nav Bar</h1>
                    </div>
                    <div className="col">
                        <h1>Home Page</h1>
                    </div>
                    <div className="col-3">
                        <EventHighlights/>
                        <WinnersHighlights/>    
                    </div>
                    
                    
                    
                </div>
                
            </div>

            
        )
    }
}

export default Home;