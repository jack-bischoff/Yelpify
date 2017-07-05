import React from 'react';

class Place extends React.Component {

  render() {
    return (
      <div>
        <div className="" data-uk-grid>
          <div className="uk-width-1-2">
            <h5 className="uk-margin-remove">{this.props.name}</h5>
            <div className="uk-text-smallest">
              <p><i>{this.props.distance + ' mi away'}</i></p>
            </div>

          </div>

          <div className="uk-width-1-2">
            <div className="uk-margin-xlarge-left">
              <p className="uk-text-smallest">{this.props.rating} <span data-uk-icon="icon: star; ratio: .9" className="starFormat"></span> </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Place;
