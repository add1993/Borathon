import React, { Component } from 'react';

class Feed extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div className="mt-3 mb-3 border feed-item p-3">
                    <div>
                        Adithya has registered for Intern Borathon.
                    </div>
                    <div className="image-container mt-3">
                        <img src='http://www.mblock.cc/wp-content/uploads/2018/08/hackathon-1-1024x430.png' />
                    </div>
                </div>
                <div className="mt-3 mb-3 border feed-item p-3">
                    <div>
                        One more day left to register for Machine Learning with Keras
                    </div>
                    <div className="image-container mt-3">
                        <img src='https://miro.medium.com/max/750/0*a6XSwHsfvz_oWSSJ.jpg' />
                    </div>
                </div>
                <div className="mt-3 mb-3 border feed-item p-3">
                    <div>
                        New Event 'Farmer's Market has been announced'.
                    </div>
                    <div className="image-container mt-3">
                        <img src='https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2009/06/03145943/farmers-markets.jpg' />
                    </div>
                </div>            
            </div>
        )
    }
}

export default Feed;