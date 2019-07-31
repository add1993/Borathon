import React, {Component} from 'react';
import Header from '../Header/Header';
import WinnersHighlights from './WinnersHighlights';
import EventHighlights from './EventHighlights';
import Feed from './Feed';
import MenuBar from './MenuBar';


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
                    <div className="col-2">
                        <MenuBar/>
                    </div>
                    <div className="col">
                        <Feed/>
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