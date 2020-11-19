import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik';
import schema from './schema';

class Forms extends Component {
  onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  onMouseEnter() {
    alert('Preencha com cuidado essa informação');
  }

  handleReset: () => void;
  
  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.onSubmit}
        validateOnMount
        initialValues={{
          name: "",
          email: "",
          cpf: "",
          address: "",
          city: "",
          state: "",
          type: "",
          picked: false,
          curriculum: "",
          office: "",
          jobDescription: ""
        }}
        render={({ values, errors }) => (
          <Form>
            <h1 className="title">Formulário</h1>
            <fieldset>
              <div className="div">
                <label>Nome</label>
                <Field type="text" name="name" placeholder="nome" className="inputName"/>
                {errors.name && (<span className="span">{errors.name}</span>)}
              </div>
              
              <div className="div">
                <label>Email</label>
                <Field type="email" name="email" placeholder="fulano@gmail.com" className="inputEmail"/>
                {errors.email && (<span className="span">{errors.email}</span>)} 
              </div>

              <div className="div">
                <label>CPF</label>
                <Field type="text" name="cpf" placeholder="apenas números" className="inputCpf"/>
                {errors.cpf && (<span className="span">{errors.cpf}</span>)} 
              </div>

              <div className="div">
                <label>Endereço</label>
                <Field type="text" name="address" placeholder="apenas letras" className="inputAddress"/>
                {errors.address && (<span className="span">{errors.address}</span>)} 
              </div>

              <div className="div">
                <label>Cidade</label>
                <Field type="text" name="city" placeholder="apenas letras" className="inputCity"/>
                {errors.city && (<span className="span">{errors.city}</span>)} 
              </div>

              <div className="div">
                <label>Estado</label>
                <Field as="select" name="state" className="inputState">
                  <option value=""></option>
                  <option value="pb">Paraíba</option>
                  <option value="sp">São Paulo</option>
                  <option value="rn">Ceará</option>
                  <option value="am">Amazonas</option>
                  <option value="go">Goias</option>
                  <option value="rs">Rio Grande do Sul</option>
                </Field>
                {errors.state && (<span className="span">{errors.state}</span>)} 
              </div>

              <div id="my-radio-group">Tipo</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="picked" value="One" />
                      Casa
                  </label>
                
                  <label>
                    <Field type="radio" name="picked" value="Two" />
                      Apartamento
                  </label>                
              </div>              
            </fieldset>
            
            <fieldset>
              <div className="div">
                <label>Resumo curricular</label>
                <Field type="textarea" name="curriculum" className="curriculum"/>
                {errors.curriculum && (<span className="span">{errors.curriculum}</span>)}
              </div>

              <div className="div">
                <label>Cargo</label>
                <Field type="text" name="office" onMouseEnter={this.onMouseEnter} className="office"/>
                {errors.office && (<span className="span">{errors.office}</span>)}
              </div>

              <div className="div">
                <label>Descrição do cargo</label>
                <Field type="textarea" name="jobDescription" className="jobDescription"/>
                {errors.jobDescription && (<span className="span">{errors.jobDescription}</span>)}
              </div>              
            </fieldset>
            <button type="submit" className="btnSubmit">Enviar</button>
            <button type="reset" onClick={this.handleReset} className="btnClear">Limpar</button>
          </Form>        
        )}           
      />      
    )
  }
}

export default Forms;