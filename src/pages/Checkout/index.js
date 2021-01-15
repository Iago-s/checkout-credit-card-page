import { useState } from 'react';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Nav from '../../components/Nav';
import Formulario from '../../components/Form';

import './styles.css';

export default function Checkout() {
  const [data, setData] = useState({
    number: '',
    name:  '',
    date: '',
    cvv: '',
    cpf: '',
    parcels: ''
  });
  return (
    <div className="container">
      <Header />
      <div className="bottom">
        <div class="box-1"></div>
        <div class="box-2"></div>
        
        <div class="row">
          <div class="card-container">
            <div class="back-page">
              <a href="https://google.com">Alterar forma de pagamento.</a>
            </div>
            <CreditCard />
          </div>

          <div class="form-container">
            <Nav />
            <Formulario data={[data, setData]}/>
          </div>
        </div>
      </div>
    </div>
  );
}