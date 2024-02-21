export const initialState = JSON.parse(window.localStorage.getItem('wishlist')) || []

export const WISHLIST_ACTION_TYPES = {
  ADD_TO_WISHLIST: 'ADD_TO_wishlist',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  CLEAR_WISHLIST: 'CLEAR_WISHLIST'
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('wishlist', JSON.stringify(state))
}

export const wishlistReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case WISHLIST_ACTION_TYPES.ADD_TO_WISHLIST: {
      const { id } = actionPayload
      const productInWishlistIndex = state.findIndex(item => item.id === id)

      if (productInWishlistIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInWishlistIndex].quantity++
        updateLocalStorage(newState)
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
    case WISHLIST_ACTION_TYPES.REMOVE_FROM_WISHLIST:
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState

    case WISHLIST_ACTION_TYPES.CLEAR_WISHLIST:
      updateLocalStorage(initialState)
      return initialState

    default:
      return state
  }
}
