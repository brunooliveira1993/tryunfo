import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {

    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        <form action="">
          <label htmlFor="Name" >Name:
            <input type="text" data-testid="name-input" value={cardName} onChange={onInputChange} />
          </label> <br />
          <label htmlFor="Descrição">Descrição:
            <input type="textarea" data-testid="description-input" value={cardDescription} onChange={onInputChange} />
          </label> <br />
          <label htmlFor="Attr01">Attr01:
            <input type="number" data-testid="attr1-input" value={cardAttr1} onChange={onInputChange} />
          </label> <br />
          <label htmlFor="Attr02">Attr02:
            <input type="number" data-testid="attr2-input" value={cardAttr2} onChange={onInputChange} />
          </label> <br />
          <label htmlFor="Attr03">Attr03:
            <input type="number" data-testid="attr3-input" value={cardAttr3} onChange={onInputChange} />
          </label> <br />
          <label htmlFor="Imagem">Imagem:
            <input type="text" data-testid="image-input" value={cardImage} onChange={onInputChange} />
          </label> <br />
          <select name="Oprions" id="" data-testid="rare-input" value={cardRare} onChange={onInputChange}> Raridade:
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select> <br />
          <label htmlFor="Super Trybe Trunfo" >
            <input type="checkbox" data-testid="trunfo-input" checked={cardTrunfo} onChange={onInputChange}/>Super Trybe Trunfo
          </label> <br />
          <button data-testid="save-button" disabled={isSaveButtonDisabled} onClick={onSaveButtonClick}>Salvar</button>
        </form>
      </div >
    )
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
};
