import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisteredClient extends Component {
  render() {
    return(
      <div>
        <Link to="/">Página inicial</Link>
        <h1>Lista de Cliente Cadastrados</h1>        
      </div>
    )
  }
}

export default RegisteredClient;