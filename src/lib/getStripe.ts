import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51OkQwpBosEbLTVk7KJfn8umH6sebJ2fCf5lPsgIeRFjpDziDe9kyZm7Y26IYXsHZ99wMp0NfmQQgbcF3DsUcsMgs000pLDbW3vç')
  }
  return stripePromise
}

export default getStripe
