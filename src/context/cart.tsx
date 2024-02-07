import { createContext, useReducer } from "react";
import { CartReducer, initialState } from "../reducers/cart";

export const CartContext = createContext({} as any)

function useCartReducer() {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    const clearCart = (product) => dispatch({
        type: 'CLEAR_CART',
        payload: product
    })
    const removeFromCart = (product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const decreaseQuantity = (product) => dispatch({
        type: 'DECREASE_QUANTITY',
        payload: product
    })


    return { state, addToCart, clearCart, removeFromCart, decreaseQuantity }
}

export function CartProvider({ children }) {

    const { state, addToCart, clearCart, removeFromCart, decreaseQuantity } = useCartReducer()

    return (
        <CartContext.Provider value={
            {
                cart: state,
                clearCart,
                addToCart,
                removeFromCart,
                decreaseQuantity
            }
        }>
            {children}

        </CartContext.Provider>
    )


}