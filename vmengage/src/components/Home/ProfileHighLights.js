import React, { Component } from 'react';


class ProfileHighLights extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div className="border p-3 mt-3 profile-container center-align">
                    <div>
                        <img src="https://avatars0.githubusercontent.com/u/9653296?s=460&v=4"/> 
                    </div>
                    <div className="mt-2">
                        <div className=""><h5>Arivoli AE</h5></div>
                        <div className="rewards-info"><h4>1000 <img src="https://photos2.fotosearch.com/bthumb/CSP/CSP994/stacks-of-gold-coins-vector-clipart__k16041054.jpg"/></h4></div>
                        <div className="blue-text">Engineering Intern, End User Computing</div>
                        <div className="blue-text">Palo Alto</div>
                    </div>
                    
                </div>
                            
            </div>
        )
    }
}

export default ProfileHighLights;