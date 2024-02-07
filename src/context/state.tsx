import { createContext, useState } from "react"




const Context = createContext({} as any)

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [quantity, setQuantity] = useState(1)

    const incQuantity = () => {

        setQuantity((prev) => prev + 1)
    }
    const decQuantity = () => {

        setQuantity((prev) => {
            if (prev - 1 < 1) return 1
            return prev - 1
        })
    }

    return (
        <Context.Provider value={
            {
                showCart,
                setShowCart,
                cartItems,
                setCartItems,
                totalPrice,
                setTotalPrice,
                totalQuantities,
                setTotalQuantities,
                quantity,
                incQuantity,
                decQuantity

            }
        }>
            {children}
        </Context.Provider>
    )

}