export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY'
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            console.log(productInCartIndex)
            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity++
                updateLocalStorage(newState)
                console.log(newState)
                return newState
            }

            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)

            return newState
        }
        case CART_ACTION_TYPES.DECREASE_QUANTITY:
            // const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === actionPayload.id)

            if (state[productInCartIndex].quantity > 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity--
                updateLocalStorage(newState)
                return newState

            } else return state




        case CART_ACTION_TYPES.REMOVE_FROM_CART:
            const { id } = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState

        case CART_ACTION_TYPES.CLEAR_CART:
            updateLocalStorage(initialState)
            return initialState

        default:
            return state
    }
}