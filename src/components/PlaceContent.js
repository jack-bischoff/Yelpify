import React from 'react';
import Place from './Place';

class PlaceContent extends React.Component {
    render() {
      return (
        <div>
          <div className="uk-background-turqoise uk-light uk-padding-small">
            <h1 className="uk-margin-remove">{'Yelpify'}</h1>
            <form className="uk-form uk-margin-small-top">
                <input type="search" className="uk-input little-round" placeholder="Search" />
            </form>
          </div>
          <div className="uk-height-max uk-overflow-auto">
              <ul className="uk-list uk-list-striped uk-margin-remove-top">
                <Place />
                <Place />
                <Place />
                <Place />
                <Place />
                <Place />
                <Place />
                <Place />
              </ul>
          </div>
        </div>
      );
    }
}

export default PlaceContent;
