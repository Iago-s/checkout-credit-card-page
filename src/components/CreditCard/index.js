import { useEffect, useState } from 'react';
import mastercardFlag from '../../assets/logos/mc_vrt_opt_rev_73_1x.png';
import visaFlag from '../../assets/logos/visa-card-credit-logo.png';

import { useCard } from '../../context/Card';

import './styles.css';

export default function CreditCard() {
  const { values } = useCard();
  const [hasFlag, setHasFlag] = useState(false);
  const [flag, setFlag] = useState(5);
  
  useEffect(() => {
    setFlag(values.number[0]);
    if(flag === '4' || flag === '5') {
      setHasFlag(true);
    }
  }, [values.number, hasFlag, flag]);

  return(
    <div className="card">
      <div className="img-container">
        {
          hasFlag === false ? 
          <p></p> :
          <img src={flag === '4' ? visaFlag : mastercardFlag} alt="Bandeira mastercard"/>
        }
      </div>
      <p className="card-number">{values.number}</p>
      <p className="card-name">{values.name.toUpperCase()}</p>
      <div className="row-1">
        <p className="validity-text">VALIDADE</p>
        <p className="cvv-text">CVV</p>
      </div>
      <div className="row-2">
        <p className="validity-date">{values.date}</p>
        <p className="cvv-code">{values.cvv}</p>
      </div>
    </div>
  );
}