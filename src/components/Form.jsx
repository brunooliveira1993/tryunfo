import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="Name" >Name:
            <input type="text" data-testid="name-input" />
          </label> <br />
          <label htmlFor="Descrição">Descrição:
            <input type="textarea" data-testid="description-input" />
          </label> <br />
          <label htmlFor="Attr01">Attr01:
            <input type="number" data-testid="attr1-input" />
          </label> <br />
          <label htmlFor="Attr02">Attr02:
            <input type="number" data-testid="attr2-input" />
          </label> <br />
          <label htmlFor="Attr03">Attr03:
            <input type="number" data-testid="attr3-input" />
          </label> <br />
          <label htmlFor="Imagem">Imagem:
            <input type="text" data-testid="image-input"/>
          </label> <br />
          <select name="Oprions" id="" data-testid="rare-input"> Raridade:
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select> <br />
          <label htmlFor="Super Trybe Trunfo" >
            <input type="checkbox" data-testid="trunfo-input"/>Super Trybe Trunfo
          </label> <br />
          <button data-testid="save-button">Salvar</button>
        </form>
      </div >
    )
  }
}
