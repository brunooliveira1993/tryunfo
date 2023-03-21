import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className='cardRender'>
        <p data-testid="name-card" className='name'>
          {cardName}
        </p>
        <img src={cardImage} alt={cardName} data-testid="image-card" />
        <p data-testid="description-card" className='name'>
          {cardDescription}
        </p>
        <div className='atr'>
          <p data-testid="attr1-card">
            Attr01.............................
            {cardAttr1}
          </p>
          <p data-testid="attr2-card">
            Attr02.............................
            {cardAttr2}
          </p>
          <p data-testid="attr3-card">
            Attr03.............................
            {cardAttr3}
          </p>
        </div>
        <p data-testid="rare-card" className='raridade'>
          {cardRare}
        </p>
        {
          cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
