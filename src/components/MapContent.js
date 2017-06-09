import React from 'react';
//import PlaceContent from './PlaceContent';
import GoogleMapReact from 'google-map-react';
import CurrentLocationMarker from './currentLocationMarker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ready: false
    }

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      ready: true
    });
  }

  render() {
    if (this.state.ready){
      return (
        <div style={{width: '800px', height: '400px'}}>
          <GoogleMapReact
            center={this.props.location}
            zoom={18}
          >
            <CurrentLocationMarker {...this.props.location} />
          </GoogleMapReact>
        </div>
      );
    }
    return <h1>Loading Map...</h1>
  }
}

export default MapContent;