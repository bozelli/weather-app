var React = require('react');

class CitySelector extends React.Component {
  render() {
    return (
      <form className={this.props.className} >
        {this.props.showLabel &&
          <div className='row'>
            <h3> Digite o nome da cidade </h3>
          </div>
        }
        <div className='row'>
          <input
            placeholder='por exemplo: Marechal, PR'
          />
        </div>
        <div className='row'>
          <button
            type='submit'
            className='btn'>
              ❅ Previsão ☁
          </button>
        </div>
      </form>
    );
  }
}

module.exports = CitySelector;