import React from 'react';
import GoogleMapReact from 'google-map-react';
import CurrentLocationMarker from './currentLocationMarker';
import PlaceContent from './PlaceContent';

class MapContent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ready: false
    }

  }

  _loadPlaces(){
  }

  componentWillReceiveProps(){
    //this._loadPlaces();
    this.setState({
      ready: true
    });
  }

  render() {

    const data = [
      {name: 'Restaurant'},
      {name: 'Delicious Restaurant'},
      {name: 'Extraordinary Restaurant'},
      {name: 'Fabulous Restaurant'},
      {name: 'Worse than a 7-11 bathroom'},
      {name: 'Restaurant'},
      {name: 'Delicious Restaurant'},
      {name: 'Extraordinary Restaurant'},
      {name: 'Fabulous Restaurant'},
      {name: 'Worse than a 7-11 bathroom'},
      {name: 'Restaurant'},
      {name: 'Delicious Restaurant'},
      {name: 'Extraordinary Restaurant'},
      {name: 'Fabulous Restaurant'},
      {name: 'Worse than a 7-11 bathroom'}
    ]
    const places = [];

    return (this.state.ready) ?
    (
      <div>
        <div data-uk-grid data-uk-height-viewport>
          <div className='uk-width-3-4 '>
            <GoogleMapReact
              center={this.props.location}
              zoom={18}
            >
              <CurrentLocationMarker {...this.props.location} />
            </GoogleMapReact>
          </div>

          <div className='uk-width-1-4 uk-padding-remove uk-box-shadow-large z-low'>
            <div className='uk-section uk-padding-remove uk-height-1-1'>
              <PlaceContent places={data} />
            </div>
          </div>
        </div>
      </div>
    )
    : <h1>Loading Map...</h1>
  }
}

export default MapContent;