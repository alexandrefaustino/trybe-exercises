import React, {Component} from 'react';
import Pokemon from './Pokemon';

class PsychicPokemon extends Component {
  constructor() {
    super()
    this.incrementPosition = this.incrementPosition.bind(this);
    this.resetPositonList = this.resetPositonList.bind(this);
    this.isEndOfList = this.isEndOfList.bind(this);
        
    this.state = {
      positionPokemon: 0,
    }
  }

  resetPositonList() {
    this.setState({
      positionPokemon: 0,
    })
  }

  incrementPosition() {
    this.setState((previousState, _props) => ({
      positionPokemon: previousState.positionPokemon + 1,
    }));
  }

  isEndOfList(list) {
    const endOfList = list.length - 1;
    if (this.state.positionPokemon === endOfList) this.resetPositonList();
    else this.incrementPosition();
  }
  render() {
    const pokemons = this.props.pokemons;
    const listPokemonTypePsychic = pokemons.filter(pokemon => pokemon.type === 'Psychic')
       
    return <div>
      <Pokemon pokemon={listPokemonTypePsychic[this.state.positionPokemon]} />
      <button type="button" className="fire-button" onClick={()=> this.isEndOfList(listPokemonTypePsychic)}>Psychic ➡ </button>
    </div>    
  }
}

export default PsychicPokemon;