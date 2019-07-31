import React, { Component } from 'react';
import Header from '../Header/Header';
import {Redirect} from 'react-router';

class EventsDisplay extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            currentEvents: [],
            upcomingEvents: [],
            redirectToDetailsPage: false,
            detailsId: 0
        }

        //bind

    }

    componentDidMount() {
        this.getCurrentEvents();
        this.getUpcomingEvents();
    }

    handleViewDetailsClick = (event) => {
        const target = event.target;
        const id = target.id;
        this.setState({
            redirectToDetailsPage: true,
            detailsId: 1
        });

    }

    getUpcomingEvents = () => {
        let upcomingEvents = [];

        let upcomingEvent = {
            eventName : 'Intern Borathon',
            eventDate: 'August 10th',
            imageUrl: 'http://www.mblock.cc/wp-content/uploads/2018/08/hackathon-1-1024x430.png',
        }

        upcomingEvents.push(upcomingEvent);
        upcomingEvents.push(upcomingEvent);
        upcomingEvents.push(upcomingEvent);
        upcomingEvents.push(upcomingEvent);
        upcomingEvents.push(upcomingEvent);
        upcomingEvents.push(upcomingEvent);
        upcomingEvents.push(upcomingEvent);

        this.setState({
            upcomingEvents : upcomingEvents
        });
    }

    getCurrentEvents = () => {
        let currentEvents = [];

        let currentEvent = {
            eventName : 'Farmers Market',
            eventDate: 'August 1st',
            imageUrl: 'https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2009/06/03145943/farmers-markets.jpg',
        }

        currentEvents.push(currentEvent);
        currentEvents.push(currentEvent);
        currentEvents.push(currentEvent);
        currentEvents.push(currentEvent);
        currentEvents.push(currentEvent);
        currentEvents.push(currentEvent);
        currentEvents.push(currentEvent);

        this.setState({
            currentEvents : currentEvents
        });
    }

    render() {

        //redirect
        let redirectVar = null;
        if(this.state.redirectToDetailsPage === true){
            redirectVar = <Redirect to={"/events/detail/" + this.state.detailsId} />
        }


        let currentEvents = this.state.currentEvents.map( (event, index) => {
            return (
                <div className="col-3 mt-3" key={index}>
                   
                    <div className="border">
                        <div className="image-container">
                            <img src={event.imageUrl} />
                        </div>
                        <div className="p-3">
                           
                            <div><b>{event.eventName}</b></div>
                            <div><b>{event.eventDate}</b></div>
                            <div className="mt-1">
                                <button type="button" id={index} className="btn btn-sm btn-info" onClick={this.handleViewDetailsClick}>View Details</button>
                            </div>
                        </div>
                        
                    </div>                                
                </div>
            );
            
        });

        let upcomingEvents = this.state.upcomingEvents.map( (event, index) => {
            return (
                <div className="col-3 mt-3" key={index}>
                   
                    <div className="border">
                        <div className="image-container">
                            <img src={event.imageUrl} />
                        </div>
                        <div className="p-3">
                           
                            <div><b>{event.eventName}</b></div>
                            <div><b>{event.eventDate}</b></div>
                            <div className="mt-1">
                                <button type="button" id={index} className="btn btn-sm btn-info" onClick={this.handleViewDetailsClick}>View Details</button>
                            </div>
                        </div>
                        
                    </div>                                
                </div>
            );
            
        });

        return (
            <div>
                <Header />
                {redirectVar}
                <div className="container mt-5">

                    <div className="current-events-container m-5">
                        <div>
                            <h3>Current Events</h3>
                        </div>
                        <div className="row">
                            {currentEvents}
                        </div>
                    </div>
                    <div className="upcoming-events-container m-5">
                        <div>
                            <h3> Upcoming Events</h3>
                        </div>
                        <div className="row">
                            {upcomingEvents}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default EventsDisplay;