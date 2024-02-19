import { PayPalButtons } from '@paypal/react-paypal-js'

interface PayPalButtonInterface {
  totalValue: string
  invoice: string
  clearCart: () => void
}

export const PayPalButton: React.FC<PayPalButtonInterface> = (props) => {
  return (
        <PayPalButtons
            // style={{ layout: 'horizontal' }}
            createOrder={ async (data, actions) => {
              return await actions.order
                .create({
                  purchase_units: [
                    {
                      description: props.invoice,
                      amount: {
                        value: props.totalValue
                      }
                    }
                  ]
                })
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order?.capture()
              console.log('order', order)
              alert(`Transaction completed  ${order}`)
              props.clearCart()
            }}
        />
  )
}

export default PayPalButton
