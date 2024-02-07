import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { CartProvider } from './context/cart.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Router location={''} navigator={undefined}>
  <CartProvider>
    <App />
  </CartProvider>
  // </Router>
)
