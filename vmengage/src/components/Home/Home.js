import React, {Component} from 'react';
import Header from '../Header/Header';
import WinnersHighlights from './WinnersHighlights';
import EventHighlights from './EventHighlights';
import Feed from './Feed';
import MenuBar from './MenuBar';
import ProfileHighLights from './ProfileHighLights';


class Home extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="home-container">

                <div className="row mt-3">
                    <div className="col-2">

                    </div>
                    <div className="col-2">
                       <ProfileHighLights/>
                    </div>
                    <div className="col">
                        <Feed/>
                    </div>
                    <div className="col-2">
                        <EventHighlights/>
                        <WinnersHighlights/>    
                    </div>
                    <div className="col-2">

                    </div>
                    
                    
                    
                </div>
                </div>
            </div>

            
        )
    }
}

export default Home;