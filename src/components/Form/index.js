import { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import './styles.css';

export default function Formulario() {
  function handlePayout(values, actions) {
    console.log(values);
    console.log(actions);
  }

  function validate(values) {
    const errors = {};
    if(!values.number) {
      errors.number = 'Número do cartão é obrigatório'
    }
    if(!values.name) {
      errors.name = 'Nome impresso no cartão é obrigatório'
    }
    if(!values.date) {
      errors.date = 'Validade obrigatória'
    }
    if(!values.cvv) {
      errors.cvv = 'Código obrigatório'
    }
    if(!values.cpf) {
      errors.cpf = 'CPF obrigatório'
    }
    if(!values.plots) {
      errors.plots = 'Número de parcelas obrigatório'
    }

    return errors;
  }

  return (
    <Formik
      initialValues={{
        number: '',
        name: '',
        date: '',
        cvv: '',
        cpf: '',
        plots: '',
      }}
      onSubmit={handlePayout}
      validate={validate}
      validateOnMount={true}
      validateOnChange={true}
      render={({ values, errors }) => (
        <Form >
          <p>Número do cartão</p>
          <Field 
            name="number"
          />
          {
            errors.number && 
              <p className="message-error">{errors.number}</p>
            
          }
          <p>Nome</p>
          <Field 
            name="name"
          />
          {
            errors.name && (
              <p className="message-error">{errors.name}</p>
            )
          }
          <div className="inputs-block">
            <div className="inputs-labels">
              <p>Validade (MM/AA)</p>
              <p>CVV</p>
              <p>CPF</p>
            </div>
            <div className="inputs-row-container">
              <Field 
                name="date"
              />
              <Field 
                name="cvv"
              />
              <Field 
                name="cpf"
              />
            </div>
            <div className="inputs-labels">
              {
                errors.date && (
                  <p className="message-error">{errors.date}</p>
                )
              }
              {
                errors.cvv && (
                  <p className="message-error">{errors.cvv}</p>
                )
              }
              {
                errors.cpf && (
                  <p className="message-error">{errors.cpf}</p>
                )
              }
            </div>
          </div>
          <p>Número de parcelas</p>
          <Field 
            name="plots"
          />
          {
            errors.plots && (
              <p className="message-error">{errors.plots}</p>
            )
          }

          <div className="button-container">
            <button type="submit">Pagar</button>
          </div>
        </Form>
      )}
    />
  );
}