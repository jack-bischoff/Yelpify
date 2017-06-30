import React from 'react';
import Place from './Place';

export default class PlaceList extends React.Component {

  state = {
    places: []
  }

  componentWillReciveProps(nextProps) {
    let {map, maps} = nextProps;
    console.log(map, maps);
  }

  render() {
    const places = [
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
              {/* {
                this.props.places.map((place) => {
                  return (
                    <li>
                      <Place name={place.name} />
                    </li>
                  );
                })
              } */}
            </ul>
          </div>
        </div>
      </div>
      );
  }
}
