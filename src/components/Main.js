import React from 'react';
import MapContent from './MapContent';
require('../styles/App.css');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      location: {}
    }
  }
  
  componentDidMount(){
     navigator.geolocation.getCurrentPosition( (position) => {
        let coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        this.setState({
          location: coords
        });
      });
  }

  render() {
    if (!navigator.geolocation) {
      return ( <p>Geolocation services unavailable for this browser</p> );
    }
    return <MapContent location={this.state.location} />
  }
}
export default App;
