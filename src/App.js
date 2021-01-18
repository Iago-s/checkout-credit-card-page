import Checkout from './pages/Checkout';

import CardProvider from './context/Card';

export default function App() {
  return (
    <CardProvider>
      <Checkout />
    </CardProvider>
  );
}