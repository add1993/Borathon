import React, { Component } from 'react';

class Feed extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div className="mt-3 mb-3 border feed-item">
                    <p>Adithya updated something.</p>
                </div>
                <div className="mt-3 mb-3 border">
                    <p>Adithya updated something.</p>                </div>
                <div className="mt-3 mb-3 border">
                    <p>Adithya updated something.</p>                </div>
            </div>
        )
    }
}

export default Feed;