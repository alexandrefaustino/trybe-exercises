import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik';

class Forms extends Component {

  validade(values) {
    const errors = {}
    if (!values.name) {
      errors.name = "Nome Obrigatório"
    }
    return errors;
  }
  render() {
    return (
      <Formik
        validateOnMount
        initialValues={{
          name: ""
        }}
        render={({ values, errors }) => (
          <Form>
            <fieldset>
              <label>Nome</label>
              <Field 
                type="text" 
                name="name" 
                className="input"                    
              />
              {errors.name && (<span>{errors.name}</span>)}             
            </fieldset>
          </Form>        
          )}           
        />      
    )
  }
}

export default Forms;