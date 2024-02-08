import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { CartProvider } from './context/cart.tsx'
import { FiltersProvider } from './context/filters.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Router location={''} navigator={undefined}>
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
  // </Router>
)
