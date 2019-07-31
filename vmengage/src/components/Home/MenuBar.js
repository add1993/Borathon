import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div className="list-group side-nav-list">
                    <Link to="/events" className="list-group-item list-group-item-action active side-nav-item">Events</Link>
                    <Link to="/rewards/redeem" className="list-group-item list-group-item-action side-nav-item">Rewards</Link>
                    <Link to="/feedback" className="list-group-item list-group-item-action side-nav-item">Feedback</Link>
                    <Link to="/Commute" className="list-group-item list-group-item-action side-nav-item">Commute</Link>
                    <Link to="/Contribute" className="list-group-item list-group-item-action side-nav-item">Contribute</Link>
                </div>
            </div>
        )
    }
}

export default MenuBar;