var React = require('react');
var Link = require('react-router-dom').Link;

require('../styles/notfound.css')

function NotFound(props) {
  return (
    <div className='main'>
      <div className='panel'>
        <div className='header'>
          <h1>Page not found</h1>
        </div>
        <div className='body'>
          <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
          <p>
            <Link to='/'>← Back to our site</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

module.exports = NotFound;