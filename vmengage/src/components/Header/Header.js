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
                        <nav className="navbar navbar-expand-lg py-3 shadow-sm topnav header-container">
                          <div className="container">
                            <a href="#" className="navbar-brand">
                              <img src={require('../../Static/Images/logo_white.png')} height="18px" width="105px" alt="" className="d-inline-block align-middle mr-2 vmlogo"/>
                              <span className="text-uppercase font-weight-bold">ENGAGE</span>
                            </a>

                            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                              <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href="#" className="nav-link"><b>Home</b><span className="sr-only">(current)</span></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><b>Events</b></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><b>Rewards</b></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><b>Feedback</b></a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><b>Commute</b></a></li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                        <div className="row epic-icons"><img className="epic-img" src={require('../../Static/Images/epic-icons.png')}/></div>
                        
                    </div>
                </div>

            
        )
    }
}

export default Header;