import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    isSaveButtonDisabled: true,
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardImage,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const att1 = Number(cardAttr1);
      const att2 = Number(cardAttr2);
      const att3 = Number(cardAttr3);
      const total = att1 + att2 + att3;
      let buttonDesableConference1 = false;
      let buttonDesableConference2 = false;
      let buttonDesable = true;
      const number = 90;
      const numberMax = 211;
      if (cardName.length !== 0
        && cardDescription.length !== 0) {
        buttonDesableConference1 = true;
      }
      if (cardImage.length !== 0
        && total < numberMax
        && total >= 0) {
        buttonDesableConference2 = true;
      }
      if (att1 > number
        || att2 > number
        || att3 > number) {
        buttonDesableConference2 = false;
      }
      if (att1 < 0
        || att2 < 0
        || att3 < 0) {
        buttonDesableConference2 = false;
      }
      if (buttonDesableConference1 === true
        && buttonDesableConference2 === true) {
        buttonDesable = false;
      }
      this.setState({
        isSaveButtonDisabled: buttonDesable,
      });
    });
  }

  onSaveButtonClick = () => { };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.onInputChange } { ...this.state } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
