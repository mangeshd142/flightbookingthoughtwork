import React, { Component } from 'react';
import './App.css';
import FlightBookingController from './screens/controller/flight-booking-controller'
import Store from './screens/store/flight-booking-store'
import Action from './screens/action/flight-booking-action'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightBookingController
            store= {Store}
            action= {Action}
        />
      </div>
    );
  }
}

export default App;
