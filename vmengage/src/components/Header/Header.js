import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
           
                <div className="">
                    <div className="" >
                        <Link to="/home"><img src={require('../../Static/Images/images.jpeg')} alt="logo-homeaway" /></Link>
                        
                    </div>
                </div>

            
        )
    }
}

export default Header;