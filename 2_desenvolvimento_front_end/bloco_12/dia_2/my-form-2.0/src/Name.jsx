import React, {Component} from 'react';

class Name extends Component {
  render() {
    const {name, handleChange} = this.props;
    return (
      <label >
        Nome
        <input
          className="inputName"
          type="text"
          name="name"
          value={name}
          onChange={handleChange} 
        />
      </label>
    )
  }
}

export default Name;