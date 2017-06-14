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
        <div className="uk-section">
          <div className="">
            
            <div data-uk-grid>
              <div className="uk-width-2-3 ">
                <GoogleMapReact
                  center={this.props.location}
                  zoom={18}
                >
                  <CurrentLocationMarker {...this.props.location} />
                </GoogleMapReact>
              </div>
              
              <div className="uk-width-1-3 uk-padding-remove">
                <div className="uk-section uk-section-muted uk-panel-scrollable uk-height-1-1">
                  <div className="">
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