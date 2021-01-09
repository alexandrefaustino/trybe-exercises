import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewClients.css';

class NewClients extends Component {
  render() {
    return(
      <div>
        <Link to="/">Página inicial</Link>
        <br/>
        <br/>
        <Link to="/registered">Clientes Cadastrados</Link>
        <h1>Cadastro de Clientes</h1>
        <form action="">
          <label className="label-name label" htmlFor="name">
            Nome
            <br/>
            <input className="input-name input" id="name" type="text"/>
          </label>

          <label className="label-age label" htmlFor="age">
            Idade
            <br/>
            <input className="input-age input" id="age" type="number"/>
          </label>
          <label className="label-email label" htmlFor="email">
            E-mail
            <br/>
            <input className="input-email input" id="email" type="email"/>
          </label>
          <button className="button-register">Cadastrar</button>
        </form>
      </div>
    )
  }
}

export default NewClients;
