var React = require ('react');
var ReactDOM = require ('react-dom');
var Home = require('./Home');
var Header = require('./Header');
/* var NotFound = require('./NotFound'); */

function App(props) {
  return(
    <div className='app-container'>
      <div className='header'>
        <Header />
      </div>
      <div className='container'>
        <Home />
      </div>
    </div>
  )
}

module.exports = App;
