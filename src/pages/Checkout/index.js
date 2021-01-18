import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Nav from '../../components/Nav';
import CreditCardData from '../../components/CreditCardData';

import './styles.css';

export default function Checkout() {
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
            <CreditCardData />
          </div>
        </div>
      </div>
    </div>
  );
}