import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import Redeem from './Rewards/Redeem';
import EventDetails from './Events/EventDetails';
import EventsDisplay from './Events/EventsDisplay';

class Main extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {

        return (
            <div>                    
                <Route path="/home" component={Home} />  
                <Route exact path="/" component={Home} />  
                <Route path="/rewards/redeem" component={Redeem} /> 
                <Route path="/events/detail/:id" component={EventDetails} /> 
                <Route exact path="/events" component={EventsDisplay} /> 
            </div>
        ) 
    }
}


export default Main;