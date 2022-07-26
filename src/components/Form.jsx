import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        <form action="">
          <label htmlFor="Name">
            Name:
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="Descrição">
            Descrição:
            <input
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label
            htmlFor="Attr01"
          >
            Attr01:
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              name="cardAttr1"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label
            htmlFor="Attr02"
          >
            Attr02:
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              name="cardAttr2"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label
            htmlFor="Attr03"
          >
            Attr03:
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              name="cardAttr3"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label
            htmlFor="Imagem"
          >
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              name="cardImage"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <select
            data-testid="rare-input"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
          >
            Raridade:
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <br />
          <label htmlFor="Super Trybe Trunfo">
            {
              hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : (
                  <>
                    <input
                      type="checkbox"
                      data-testid="trunfo-input"
                      checked={ cardTrunfo }
                      name="cardTrunfo"
                      onChange={ onInputChange }
                    />
                    <p>Super Trybe Trunfo</p>
                  </>
                )
            }
          </label>
          <br />
        </form>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
};
