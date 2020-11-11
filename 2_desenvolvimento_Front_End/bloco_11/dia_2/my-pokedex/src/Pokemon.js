import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

class Pokemon extends Component {
  render() {
    const { name, type, image } = this.props.objectPokemon;
    const { value, unit } = this.props.objectPokemon.averageWeight;
      
    return <div className='Pokemon'>      
      <p>{name}</p>
       <p>{type}</p>
      <p> Average Weight: {value}{unit}</p>
      <Image image={image} />      
    </div>
  }
}

Pokemon.protoTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
}

export default Pokemon;
