import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  }
  onInputChange= (event) => {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`)
    this.setState({
      [name]: value
    })
  };
  onSaveButtonClick= () => { };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
