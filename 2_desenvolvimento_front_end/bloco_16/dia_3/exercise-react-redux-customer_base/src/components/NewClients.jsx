import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addClients } from '../store/reducer/Clients.actions'
import './NewClients.css';

class NewClients extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      idade: 0,
      email: '',
      senha: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  clearInput() {    
    this.setState({
      name: '',
      idade: 0,
      email: '',
      senha: '',
    })
  }

  handleClick(event) {
    event.preventDefault();
    const { name, idade, email, senha } = this.state;
    const {add} = this.props;
    add(name, idade, email, senha);
    this.clearInput();
  }

  render() {
    const { name, idade, email, senha } = this.state;
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
            <input 
              className="input-name input" 
              id="name"
              value={name}
              type="text"
              name="name"
              onChange={ (event) => this.handleChange(event) }
            />            
          </label>

          <label className="label-age label" htmlFor="age">
            Idade
            <br/>
            <input 
              className="input-age input" 
              id="age"
              value={idade}
              type="number"
              name="idade"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>

          <label className="label-email label" htmlFor="email">
            E-mail
            <br/>
            <input 
              className="input-email input" 
              id="email"
              value={email}
              type="email"
              name="email"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>

          <label className="label-password label" htmlFor="password">
            Senha
            <br/>
            <input 
              className="input-password input" 
              id="password" 
              value={senha}
              type="password"
              name="senha"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>

          <button 
            onClick= {(event) => this.handleClick(event)} 
            className="button-register">
              Cadastrar
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: (name, idade, email, senha )  => dispatch(addClients(name, idade, email, senha))
});

export default connect(null, mapDispatchToProps)(NewClients);
