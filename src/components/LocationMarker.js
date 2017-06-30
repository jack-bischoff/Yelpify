import React, { Component } from 'react';

require('../styles/locationMarker.css');

export default class LocationMarker extends Component {
  render() {
    let marker = (this.props.icon === 'user') ? require('../images/userIcon.png') : require('../images/businessIcon.png')

    return (
      <div>
        <img className='locationMarker' src={marker} />
      </div>
    );
  }
}
