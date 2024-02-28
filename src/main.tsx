import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { CartProvider } from './context/cart.tsx'
import { FiltersProvider } from './context/filters.tsx'
import { WishlistProvider } from './context/wishlist.tsx'

const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!)?.render(
  <QueryClientProvider client={queryClient}>
  <PayPalScriptProvider
  options={{
    clientId: 'AWE5xHV0s2idwDLw6ftA1159Vuur5ZYzseJAIJOXD7o0mBnVixK1Jh-gVN9x7NsSX8a-amA3i8NDnkBm'
  }}
  >

  <CartProvider>
    <FiltersProvider>
      <WishlistProvider>
      <App />
      </WishlistProvider>
    </FiltersProvider>
  </CartProvider>
  </PayPalScriptProvider>
  </QueryClientProvider>

)
