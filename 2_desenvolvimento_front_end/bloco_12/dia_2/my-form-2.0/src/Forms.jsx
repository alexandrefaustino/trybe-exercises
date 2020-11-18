import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik';

class Forms extends Component {

  onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }
  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        validateOnMount
        initialValues={{
          name: ""
        }}
        render={({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}> 
            <fieldset>
              <label>Nome</label>
              <Field type="text" name="name" className="input"/>              
            </fieldset>
            <button type="submit">Enviar</button>
          </Form>        
        )}           
      />      
    )
  }
}

export default Forms;