import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik';

class Forms extends Component {

  onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  validate(values) {
    const errors = {}
    if(!values.name) {
      errors.name = '*';
    }
    return errors;
  }
  render() {
    return (
      <Formik
        validate={this.validate}
        onSubmit={this.onSubmit}
        validateOnMount
        initialValues={{
          name: ""
        }}
        render={({ values, errors }) => (
          <Form> 
            <fieldset>
              <label>Nome</label>
              <Field type="text" name="name" className="input"/>
              {errors.name && (<span className="span">{errors.name}</span>)}             
            </fieldset>
            <button type="submit">Enviar</button>
          </Form>        
        )}           
      />      
    )
  }
}

export default Forms;