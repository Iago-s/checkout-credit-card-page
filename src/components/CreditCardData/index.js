import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { useCard } from '../../context/Card';

import './styles.css';

export default function CreditCardData() {
  const { values, setValues } = useCard();
  const [isLoaded, setIsLoaded] = useState(false);

  function handlePayout(values, actions) {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
      setValues({
        number: '',
        name: '',
        date: '',
        cvv: '',
        cpf: '',
        plots: '1x R$1.198,00 (á vista)'
      });
      actions.resetForm();
    }, 3000);
  }

  return (
    <Formik
      initialValues={values}
      onSubmit={handlePayout}
      validationSchema={schema}
      validateOnChange={true}

      render={({ errors, touched, values }) => (
        <Form >
          <p>Número do cartão</p>
          { setValues(values) }
          <Field 
            name="number"
            style={{
              borderColor: errors.number ? '#fc0133' : '#01ee55'
            }}
          />
          {
            errors.number && touched.number && (
              <p className="message-error">{errors.number}</p>
            )
          }
          <p>Nome</p>
          <Field 
            name="name"
            style={{
              borderColor: errors.name ? '#fc0133' : '#01ee55'
            }}
            value={values.name.toUpperCase()}
          />
          {
            errors.name && touched.name && (
              <p className="message-error">{errors.name}</p>
            )
          }
          <div className="inputs-block">
            <div className="inputs-labels">
              <p>Validade (MM/AA)</p>
              <p>CVV</p>
              <p>CPF(123.123.123-38)</p>
            </div>
            <div className="inputs-row-container">
              <Field 
                name="date"
                style={{
                  borderColor: errors.date ? '#fc0133' : '#01ee55'
                }}
              />
              <Field 
                name="cvv"
                style={{
                  borderColor: errors.cvv ? '#fc0133' : '#01ee55'
                }}
              />
              <Field 
                name="cpf"
                style={{
                  borderColor: errors.cpf ? '#fc0133' : '#01ee55'
                }}
              />
            </div>
            <div className="inputs-labels">
              {
                errors.date && touched.date && (
                  <p className="message-error">{errors.date}</p>
                )
              }
              {
                errors.cvv && touched.cvv && (
                  <p className="message-error">{errors.cvv}</p>
                )
              }
              {
                errors.cpf && touched.cpf && (
                  <p className="message-error">{errors.cpf}</p>
                )
              }
            </div>
          </div>
          <p>Número de parcelas</p>
          <Field 
            name="plots"
            as="select"
            className="plots-input"
            style={{
              borderColor: errors.plots ? '#fc0133' : '#01ee55'
            }}
          >
            <option value="1x R$1.198,00 (á vista)">1x R$1.198,00 (á vista)</option>
            <option value="2x R$599,00 (sem juros)">2x R$599,00 (sem juros)</option>
            <option value="3x R$314,47 (á vista)">3x R$314,47 (sem juros)</option>
          </Field>
          {
            errors.plots &&  touched.plots && (
              <p className="message-error">{errors.plots}</p>
            )
          }

          <div className="button-container">
            <button type="submit">{isLoaded === false ? 'Pagar' : 'Carregando'}</button>
          </div>
        </Form>
      )}
    />
  );
}

const schema = Yup.object().shape({ 
  number: Yup.string()
    .min(16, 'Informe os 16 números')
    .max(16, 'Somente 16 números')
    .required('Número do cartão é obrigatório.'),

  name: Yup.string().required('Nome impresso no cartão é obrigatório.'),

  date: Yup.string()
    .max(5, 'Exemplo 01/21')
    .matches(/([0-9]{2})\/([0-9]{2})/, 'Exemplo 01/21')
    .required('Validade do cartão é obrigatório'),
  
  cvv: Yup.string()
    .max(3, 'Somente 3 números')
    .matches(/([0-9]{3})/, 'Exemplo 123')
    .required('Código obrigatório.'),

  cpf: Yup.string()
    .min(14, 'CPF incompleto')
    .max(14, 'Somente 11 números')
    .matches(/([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})/, 'Formato invalido')
    .required('CPF é obrigatório.'),

  plots: Yup.string()
    .required('Número de parcelas obrigatório.'),
});