import React from 'react';
import GoogleMapReact from 'google-map-react';
import CurrentLocationMarker from './currentLocationMarker';
import PlaceContent from './PlaceContent';



class MapContent extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    ready: false,
    map: {}
  }

  componentWillReceiveProps(nextProps){
    const location = nextProps.location;
    const urlParams = {
      key: ' AIzaSyDLpwXrHJQf_aXsMdkiVPwtV1JKPLBz-8w',
      libraries: 'places'
    }


    const map = 
    <GoogleMapReact
      bootstrapURLKeys={urlParams}
      yesIWantToUseGoogleMapApiInternals={true}
      center={location}
      zoom={18}
      onGoogleApiLoaded={ 
        ({map, maps}) => {
          let request = {
            location: {...location},
            radius: 1000,
            type: ['restaurant']
          }

          let service = new maps.places.PlacesService(map);
          service.nearbySearch(request, (results, status) => {
            if (status === maps.places.PlacesServiceStatus.OK) {
              results.map( (place) => {
                console.log(place.name);
              })
            }
          });
        }
      }
    >
      <CurrentLocationMarker {...location} />
    </GoogleMapReact>
    

    this.setState({
      ready: true,
      map: map
    });
  }

  componentDidMount(){
    
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
            {this.state.map}
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