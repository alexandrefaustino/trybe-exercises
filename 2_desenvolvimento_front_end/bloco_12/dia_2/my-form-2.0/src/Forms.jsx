import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik';
import schema from './schema';

class Forms extends Component {
  onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }
  
  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.onSubmit}
        validateOnMount
        initialValues={{
          name: "",
          email: ""
        }}
        render={({ values, errors }) => (
          <Form> 
            <fieldset>
              <div className="div">
                <label>Nome</label>
                <Field type="text" name="name" className="input"/>
                {errors.name && (<span className="span">{errors.name}</span>)}
              </div>
              
              <div className="div">
                <label>Email</label>
                <Field type="email" name="email" className="input"/>
                {errors.email && (<span className="span">{errors.email}</span>)} 
              </div>
              
            </fieldset>
            <button type="submit">Enviar</button>
          </Form>        
        )}           
      />      
    )
  }
}

export default Forms;