import React from 'react';
//import PlaceContent from './PlaceContent';
import GoogleMapReact from 'google-map-react';
import CurrentLocationMarker from './currentLocationMarker';
import PlaceContent from './PlaceContent';

require('../styles/mapContent.css');

class MapContent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ready: false
    }

  }

  componentWillReceiveProps(){
    this.setState({
      ready: true
    });
  }

  render() {

      return (this.state.ready) ?
      (
        <div>
          <div>

            <div data-uk-grid data-uk-height-viewport>
              <div className="uk-width-3-4">
                <GoogleMapReact
                  center={this.props.location}
                  zoom={18}
                >
                  <CurrentLocationMarker {...this.props.location} />
                </GoogleMapReact>
              </div>

              <div className="uk-width-1-4 uk-padding-remove uk-box-shadow-large z-high">
                <div className="uk-section uk-padding-remove-top">
                  <div>
                    <PlaceContent />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )
      : <h1>Loading Map...</h1>
  }
}

export default MapContent;
