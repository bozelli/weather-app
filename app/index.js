var React = require('react');
var ReactDOM = require('react-dom');
require('./styles/app.css');
var App = require ('./Presentation/App')

ReactDOM.render (
  <App />,
  document.getElementById('app')
);