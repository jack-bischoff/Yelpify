import React from 'react';

class Place extends React.Component {

  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
      </div>
    )
  }

}

export default Place;