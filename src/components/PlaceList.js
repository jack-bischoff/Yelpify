import React from 'react';
import Place from './Place';


export default class PlaceList extends React.Component {

  state = {
    places: []
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
