import React from 'react';
import Place from './Place';


export default class PlaceList extends React.Component {

  state = {
    places: []
  }

  _calculateDistance(placeLoc, userLoc) {
    //Using the haversine formula to calculate a distance between lat/long coords
    const earthRadius = 6371;
    const km2mi = 0.621371;
    const toRadian = function(deg) {
      return (3.1415/180) * deg;
    }

    let lat2 = placeLoc.lat();
    let lon2 = placeLoc.lng();

    let lat1 = userLoc.lat;
    let lon1 = userLoc.lng;

    let x1 = lat2-lat1;
    let dLat = toRadian(x1);
    let x2 = lon2-lon1;
    let dLon = toRadian(x2);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const dis =  earthRadius * c * km2mi;
    //round to 2 decimal points
    return Number(Math.round(dis+'e2')+'e-2');
  }

  _getPlacesByLocation(location, api) {
    const map = api[0]
    const maps = api[1];
    const placesRequest = {
      location: location,
      radius: '1000',
      type: ['restaurant']
    }

    let service = new maps.places.PlacesService(map);

    service.nearbySearch(placesRequest, (results, status) => {

      if (status == maps.places.PlacesServiceStatus.OK) {
        this.setState({
          places: results
        })
        this.props.updateMarkers(results)
      }

    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location || (this.props.api.length === 0 && nextProps.api.length !== 0)) {
      this._getPlacesByLocation(nextProps.location, nextProps.api);
    }

  }

  render() {
    return (
      <div>
        <div className="headerColor uk-light uk-padding-small">
          <h2 className="uk-padding-small uk-margin-remove">Yelpify</h2>
          <form className="uk-form">
              <input
                type="text"
                className="uk-input uk-margin-small-top little-round"
                placeholder="Search"
                ref={(input) => { this.textInput = input; }}
              />
          </form>
        </div>
        <div >
          <div className="uk-overflow-auto uk-height-max">
            <ul className="uk-list uk-list-striped uk-margin-remove">
              {
                this.state.places.map((place) => {
                  return (
                    <li key={place.place_id}>
                      <Place
                        name={place.name}
                        rating={place.rating}
                        distance={this._calculateDistance(place.geometry.location, this.props.location)}
                      />
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
      );
  }
}
