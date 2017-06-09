import React from 'react';
//import PlaceContent from './PlaceContent';
import GoogleMapReact from 'google-map-react';
import SimpleMap from './simpleMap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ready: false
    }

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      ready: true
    });
  }

  render() {
    return (
      <div style={{width: '400px', height: '400px'}}>
        <SimpleMap/>
      </div>
    );
    
    /*if (this.state.ready){
      return (
        <div>
      );
    }*/
    //return (<h1>Gathering Location...</h1>);
    
  }
}

export default MapContent;