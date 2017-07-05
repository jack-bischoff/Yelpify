require('uikit/dist/css/uikit.min.css');
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';


import App from './components/Main';


// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
