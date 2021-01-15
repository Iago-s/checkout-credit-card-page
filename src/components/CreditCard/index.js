import mastercardFlag from '../../assets/logos/mc_vrt_opt_rev_73_1x.png';
import './styles.css';

export default function CreditCard() {
  return(
    <div className="card">
      <div className="img-container">
        <img src={mastercardFlag} alt="Bandeira mastercard"/>
      </div>
      <p className="card-number">5555 5555 5555 5555</p>
      <p className="card-name">IAGO SILVA OLIVEIRA</p>
      <div className="row-1">
        <p className="validity-text">VALIDADE</p>
        <p className="cvv-text">CVV</p>
      </div>
      <div className="row-2">
        <p className="validity-date">14/01</p>
        <p className="cvv-code">123</p>
      </div>
    </div>
  );
}