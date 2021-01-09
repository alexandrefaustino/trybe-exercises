import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  render() {
    return(
      <div className="div-login">
        <h1>Login</h1>
        <hr/>       
        <label className="label-email" htmlFor="email">
          Seu e-mail
          <br/>
          <input className="input-email" placeholder="email" id="email" type="email"/>
        </label>

        <label className="label-password" htmlFor="pass">
          Senha:
          <br/>
          <input className="input-password" placeholder="password" id="password" type="password"/>
        </label>
        <button className="button-login">Logar</button>
        <div className="div-register">
          <p>
            Ainda não tem conta?
            <button className="button-register">
              <Link to="/newClients">Cadastre-se</Link>              
            </button>            
          </p>
        </div>   
      </div>
    )
  }
}

export default Login;
