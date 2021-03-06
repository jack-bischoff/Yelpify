import React from 'react';

import PlaceList from './Placelist';
import MapDisplay from './MapDisplay';


export default class MapContent extends React.Component {

  constructor(props){
    super(props)
    this._setAPI = this._setAPI.bind(this);
    this._updateMarkers = this._updateMarkers.bind(this);
  }

  state = {
    api: [],
    markers: [],
    ready: false
  }


  _setAPI(map, maps) {
    this.setState({
      api: [map, maps]
    });
  }

  _updateMarkers(newPlaces) {
    let newMarkers = []
    for (let i = 0; i < newPlaces.length; i++) {
      newMarkers.push(this._createMarker(newPlaces[i]));
    }

    this.setState({
      markers: newMarkers
    });
  }

  _createMarker(place) {
    return {
      location: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
      id: place.place_id
    }
  }

  componentWillReceiveProps(nextProps) {
    let usersLocationMarker = [{location: nextProps.location, type: 'user'}]

    this.setState({
      ready: true,
      markers: usersLocationMarker
    })
  }

  render() {
    return (this.state.ready) ?
    (
      <div>
        <div data-uk-grid data-uk-height-viewport>
          <div className='uk-width-3-4'>
            <MapDisplay location={this.props.location} markers={this.state.markers} apiLoaded={this._setAPI}/>
          </div>

          <div className='uk-width-1-4 uk-padding-remove uk-box-shadow-large z-low'>
            <div className='uk-section uk-padding-remove uk-height-1-1'>
              <PlaceList location={this.props.location} api={this.state.api} updateMarkers={this._updateMarkers} />
            </div>
          </div>
        </div>
      </div>
    )
    : <h1>Loading Map...</h1>
  }
}
