import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    searchRare: '',
    nameSearch: '',
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
    saveCard: [],
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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

  onSaveButtonClick = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((preventState) => ({
      saveCard: [...preventState.saveCard, newCard],
    }));
    if (cardTrunfo === 'on') {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        hasTrunfo: true,
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true,
      });
    }
  };

  removeCard = (event) => {
    const { saveCard } = this.state;
    const deleteCardName = event.currentTarget.id;
    const cardItem = saveCard.map((card) => card);
    const itemDelete = cardItem.filter((Del) => Del.cardName === deleteCardName);
    if (itemDelete[0].cardTrunfo === 'on') {
      this.setState({
        hasTrunfo: false,
      });
    }
    for (let i = 0; i < saveCard.length; i += 1) {
      if (saveCard[i].cardName === itemDelete[0].cardName) {
        saveCard.splice(i, 1);
      }
    }
    this.setState((preventState) => ({
      saveCard: [...preventState.saveCard],
    }));
  };

  render() {
    const { saveCard } = this.state;
    const { nameSearch } = this.state;
    const { searchRare } = this.state;

    // const rareFilter = saveCard.filter((card) => {
    //   const searchName = card.cardRare;
    //   return searchName.includes(searchRare);
    // });

    // const nameFilter = saveCard.filter((card) => {
    //   const searchName = card.cardName;
    //   return searchName.includes(nameSearch);
    // });

    const filterRender = () => {
      if (searchRare !== '') {
        const rareFilter = saveCard.filter((card) => {
          const rare = card.cardRare;
          return rare === searchRare;
        });
        return rareFilter;
      }
      const nameFilter = saveCard.filter((card) => {
        const searchName = card.cardName;
        return searchName.includes(nameSearch);
      });
      return nameFilter;
    };

    const objMap = filterRender();

    const saveCardRender = objMap.map((car) => (
      <div
        key={ car.cardName }
      >
        <Card
          key={ car.cardName }
          { ...car }
        />
        <button
          id={ car.cardName }
          type="submit"
          data-testid="delete-button"
          onClick={ this.removeCard }
        >
          Excluir
        </button>
      </div>
    ));

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          { ...this.state }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <h2>Todas as Cartas</h2>
        <h3>Filtro de Busca</h3>
        <input
          placeholder="Nome da carta"
          type="text"
          data-testid="name-filter"
          onChange={ this.handleChange }
          name="nameSearch"
          // nameSearch={ this.state.cardName }
        />
        <br />
        <select
          data-testid="rare-filter"
          placeholder="Raridade"
          name="searchRare"
          onChange={ this.handleChange }
        >
          Raridade:
          <option value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        {saveCardRender}
      </div>
    );
  }
}

export default App;
