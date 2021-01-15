import check from '../../assets/logos/check.svg';
import next from '../../assets/logos/next.svg';

import './styles.css';

export default function Nav() {
  return(
    <div className="nav-container">
      <div className="checkout-level">
        <div className="circle">
          <img src={check} alt="Check icon"/>
        </div>
        <div className="checkout-title">Carrinho</div>
        <div className="next">
          <img src={next} alt="Next icon"/>
        </div>
      </div>
      <div className="checkout-level">
        <div className="circle">
          2
        </div>
        <div className="checkout-title">Pagamento</div>
        <div className="next">
          <img src={next} alt="Next icon"/>
        </div>
      </div>
      <div className="checkout-level">
        <div className="circle">
          3
        </div>
        <div className="checkout-title">Pedido finalizado</div>
        <div className="next">
          <img src={next} alt="Next icon"/>
        </div>
      </div>
    </div>
  );
}