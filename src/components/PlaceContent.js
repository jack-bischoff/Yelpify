import React from 'react';
import Place from './Place';

class PlaceContent extends React.Component {
    
    render() {
      return (
        <div>
          <h3>Restaurants near you</h3>
          {
            this.props.places.map((place) => {
              return (
                <ul>
                  <Place name={place.name} />
                </ul>
              );
            })
          }
        </div>
        );
    }
}

export default PlaceContent;