import React from 'react';
import Place from './Place';

class PlaceContent extends React.Component {

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
                  this.props.places.map((place) => {
                    return (
                      <li>
                        <Place name={place.name} />
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

export default PlaceContent;