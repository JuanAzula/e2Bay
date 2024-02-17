/* eslint-disable @typescript-eslint/no-var-requires */
const stripe = require('stripe')('sk_test_51OkQwpBosEbLTVk7XT7PIQ65GXajS2TMSyVmtmklFXaZdZKiDGmrxJTKtBUUzLVQzxWMQCGIaHeL1X2VkEpVRQnk00Gg2NsobM')
const express = require('express')
const app = express()
app.use(express.static('public'))

const DOMAIN = 'http://localhost:5173'

app.post('/create-checkout-session', async (req, res) => {
  console.log('bb')
  console.log('bobolon')
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`
  })

  res.redirect(303, session.url)
})

app.listen(5173, () => { console.log('Running on port 5174') })
