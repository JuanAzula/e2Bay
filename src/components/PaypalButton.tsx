import { PayPalButtons } from '@paypal/react-paypal-js'

interface PayPalButtonInterface {
  totalValue: string
  invoice: string
}

export const PayPalButton: React.FC<PayPalButtonInterface> = (props) => {
  return (
        <PayPalButtons
            // style={{ layout: 'horizontal' }}
            createOrder={ (data, actions) => {
              return actions.order
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
            }}
        />
  )
}

export default PayPalButton
