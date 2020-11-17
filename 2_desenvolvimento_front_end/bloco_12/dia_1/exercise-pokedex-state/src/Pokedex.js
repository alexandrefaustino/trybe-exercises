import React from 'react';
import Pokemon from './Pokemon';
import FirePokemon from './FirePokemon';
import PsychicPokemon from './PsychicPokemon';

class Pokedex extends React.Component {
    constructor() {
      super()
      this.incrementPositionList = this.incrementPositionList.bind(this);
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

    incrementPositionList() {
      this.setState((previousState, _props) => ({
        positionPokemon: previousState.positionPokemon + 1,
      }));
    }

    isEndOfList(list) {
      const endOfList = list.length - 1;
      if (this.state.positionPokemon === endOfList) this.resetPositonList();
      else this.incrementPositionList();
    }
    
    render() {
      const pokemons = this.props.pokemons;      

        return (
          <div className="pokedex">

            <Pokemon pokemon={pokemons[this.state.positionPokemon]} />
                                      
            <button className="button" type="button" onClick={ ()=> this.isEndOfList(pokemons)}>Next ➡</button>           
                           
            <div>
              <FirePokemon pokemons={pokemons}/>
              <PsychicPokemon pokemons={pokemons} />
            </div>
          </div>
      );
    }
}

export default Pokedex;