import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class ListClients extends Component {
  render() {
    const { clients } = this.props;
    console.log(clients);
    return(
      <div>
        <Link to="/">Página inicial</Link>
        <h1>Lista de Cliente Cadastrados</h1>
        <p>{clients}</p>        
      </div>      
    )
  }
}

function mapStateToProps(state) {
  return {
    clients: state.listClients,
  }
}

export default connect(mapStateToProps)(ListClients);
