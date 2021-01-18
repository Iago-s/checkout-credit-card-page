import { createContext, useState, useContext } from 'react';

const CardContext = createContext();

export default function CardProvider({ children }) {
  const [values, setValues] = useState({
    number: '',
    name: '',
    date: '',
    cvv: '',
    cpf: '',
    plots: '1x R$1.198,00 (á vista)',
  });

  return( 
    <CardContext.Provider 
      value={{
        values,
        setValues,
      }}
    >
      { children }
    </CardContext.Provider>
  );
}


export function useCard() {
  const context = useContext(CardContext);
  const { values, setValues } = context;

  return { values, setValues };
}
