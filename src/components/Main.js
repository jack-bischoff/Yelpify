import React from 'react';
import MapContent from './MapContent';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      location: {},
    }
  }
  
  componentDidMount(){
     navigator.geolocation.getCurrentPosition( (position) => {
        let coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        this.setState({
          location: coords,
        });
      });
  }

  render() {
    if (!navigator.geolocation) {
      return ( <p>Geolocation services unavailable for this browser</p> );
    }
    return <MapContent location={this.state.location} api={this.state.api} />
  }
}
export default App;
