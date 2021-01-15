import './styles.css';

export default function Form() {
  const messageError = 'Número do cartão inválido';
  return(
    <form >
      <p>Número do cartão</p>
      <input/>
      <p className="message-error">{messageError}</p>
      <p>Nome</p>
      <input/>
      <p className="message-error">{messageError}</p>
      <div className="inputs-block">
        <div className="inputs-labels">
          <p>Validade (MM/AA)</p>
          <p>CVV</p>
          <p>CPF</p>
        </div>
        <div className="inputs-row-container">
          <input />
          <input />
          <input />
        </div>
      </div>
      <p>Número de parcelas</p>
      <input/>
      <p className="message-error">{messageError}</p>
      
      <div className="button-container">
        <button>Pagar</button>
      </div>
    </form>
  );
}