import React from 'react';
import Place from './Place';

class PlaceContent extends React.Component {

    render() {
      return (
        <div>
          <div className="uk-background-turqoise uk-light uk-padding-small">
            <h1 className="uk-margin-remove">Places</h1>
          </div>
          <ul className="uk-list uk-list-striped uk-margin-remove-top">
            <Place />
          </ul>
        </div>
        );
    }
}

export default PlaceContent;
