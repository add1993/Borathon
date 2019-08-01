import React, {Component} from 'react';
import Header from '../Header/Header';
 
 
class Redeem extends Component {
   constructor(props){
       super(props);
       console.log(props);
   }
  
   render(){
       return (
           <div>
               <Header/>
               <div className="rewards-parent-container">               
                    <div className="container col-5 rewards-container">                        
                        <br/><br/><br/><br/>
                        <div>
                          <h2 className="center-align"> REDEEM CREDITS </h2>
                        </div>
                        <div className="border mt-5 p-4 row rewards-item">
                            <div className="col-3 img-container">
                                <img src={require('../../Static/Images/vmware.png')} />
                            </div>
                            <div className="col-6 mt-3">
                                Redeem for VMware Store Merch
                            </div>
                            <div className="ml-5 mt-2">
                                <button type="button" className="btn btn-md btn-success" >Redeem</button>
                            </div>
                        </div>
                        <div className="border mt-5 p-4 row rewards-item">
                            <div className="col-3 img-container">
                                <img src={require('../../Static/Images/scoop.jpeg')} />
                            </div>
                            <div className="col-6 mt-3">
                                Redeem for Scoop Credits
                            </div>
                            <div className="ml-5 mt-2">
                                <button type="button" className="btn btn-md btn-success" >Redeem</button>
                            </div>
                        </div>
                        <div className="border mt-5 p-4 row rewards-item">
                            <div className="col-3 img-container">
                                <img src={require('../../Static/Images/zipcar.jpeg')} />
                            </div>
                            <div className="col-6 mt-3">
                                Redeem for ZipCar Credits
                            </div>
                            <div className="ml-5 mt-2">
                                <button type="button" className="btn btn-md btn-success" >Redeem</button>
                            </div>
                        </div>
                        <div className="border mt-5 p-4 row rewards-item">
                            <div className="col-3 img-container">
                                <img src={require('../../Static/Images/amazon.png')} />
                            </div>
                            <div className="col-6 mt-3">
                                Redeem for Amazon Gift Cards
                            </div>
                            <div className="ml-5 mt-2">
                                <button type="button" className="btn btn-md btn-success" >Redeem</button>
                            </div>
                            
                        </div>

                    </div>
               </div>
           </div>
       )
   }
}
 
export default Redeem;

