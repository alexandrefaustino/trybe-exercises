import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Página principal</h1>
        <button>
          <Link to="/login">Tela de Login</Link>
        </button>
      </div>
    )
  }
}

export default Home;
