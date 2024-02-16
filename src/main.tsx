import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { CartProvider } from './context/cart.tsx'
import { FiltersProvider } from './context/filters.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Router location={''} navigator={undefined}>
  <PayPalScriptProvider
  options={{
    'client-id': 'test'
  }}
  >
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
  </PayPalScriptProvider>
  // </Router>
)
