import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateDonation from'./components/CreateDonation';
import EditDonation from'./components/EditDonation';
import Home from'./components/Home';
import NavBar from'./components/NavBar';
import DonationDetails from'./components/DonationDetails';
// import image5 from './image5.jpg'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <div className="container">
         <NavBar/>
         <Route path="/" exact component={Home}></Route>
         <Route path="/add" component={CreateDonation}></Route>
         <Route path="/edit/:id" component={EditDonation}></Route>
         <Route path="/store/:id" component={DonationDetails}></Route>

         </div>
         </div>
         </BrowserRouter>
    

    
    )
  }
}


