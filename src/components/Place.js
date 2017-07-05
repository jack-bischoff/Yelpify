import React from 'react';

class Place extends React.Component {

  render() {
    return (
      <div data-uk-grid>
        <div className="uk-width-4-5">
          <h5>{this.props.name}</h5>
        </div>
        <div className="uk-width-1-5">
          <div className="uk-text-center">
            <p className="uk-text-smallest uk-margin-remove">{this.props.rating}</p>
            <div className="starFormat">
              <span data-uk-icon="icon: star; ratio: 0.8"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Place;
