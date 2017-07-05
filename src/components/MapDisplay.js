import React from 'react';
import LocationMarker from './LocationMarker';
import GoogleMapReact from 'google-map-react';
require('../styles/App.css');

const urlParams = {
  key: ' AIzaSyDLpwXrHJQf_aXsMdkiVPwtV1JKPLBz-8w',
  libraries: 'places'
}

export default class MapDisplay extends React.Component {


  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={urlParams}
        center={this.props.location}
        zoom={18}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={
          ({map, maps}) => {
            this.props.apiLoaded(map, maps);
          }
        }
      >
        <LocationMarker {...this.props.location} icon={'user'} />
        {
          this.props.markers.map( (marker) => {
            return <LocationMarker key={marker.id} {...marker.location}  />
          })
        }
      </GoogleMapReact>
    )
  }

}
