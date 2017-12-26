var React = require('react');
var CitySelector = require('./CitySelector');

function Home(props) {
  return (
    <div>
      <CitySelector showLabel={true} className='column-center' />
    </div>
  )
}

module.exports = Home;