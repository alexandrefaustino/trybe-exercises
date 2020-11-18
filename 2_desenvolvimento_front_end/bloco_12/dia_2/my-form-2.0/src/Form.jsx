import React, {Component} from 'react';
import Name from './Name';

class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
    }
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">Formulário</h1>
        <form action="">
          <fieldset>
            <Name name={this.state.name} handleChange={this.handleChange} />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;