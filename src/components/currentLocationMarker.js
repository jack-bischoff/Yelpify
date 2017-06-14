import React, { Component } from 'react';

let marker = require('../images/locationIcon.png');
require('../styles/locationMarker.css');

class CurrentLocationMarker extends Component {
  render() {
    return (
      <div>
        <img className='locationMarker' src={marker} />
      </div>
    );
  }
}

export default CurrentLocationMarker;