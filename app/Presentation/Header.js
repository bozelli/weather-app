var React = require('react');
var CitySelector = require('./CitySelector');

function Header (props) {
  return (
    <div>
      <div>
        <h1> São Pedro Online </h1>
      </div>
      <CitySelector className='column-right' showLabel={false} />
    </div>
  );
}

module.exports = Header;