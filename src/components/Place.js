import React from 'react';

class Place extends React.Component {

  render() {
    return (
      <div>
        <div data-uk-grid>
          <div className="uk-width-1-2">
            <h5 className="uk-margin-remove">{this.props.name}</h5>
            <div className="uk-text-smallest">
              <p><i>{this.props.distance + ' mi away'}</i></p>
            </div>

          </div>

          <div className="uk-width-1-2">
            <div className="uk-margin-xlarge-left">
              <p className="uk-text-smallest uk-margin-remove">{this.props.rating} <i className="fa fa-star starFormat" aria-hidden="true"></i></p>

              {this.props.price !== undefined &&
                <p className="uk-text-smallest uk-margin-remove">{this.props.price} <i className="fa fa-money dollarFormat" aria-hidden="true"></i></p>
              }

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Place;
