import { useContext } from 'react'
import { WishlistContext } from '../context/wishlist'

export const useWishlist = () => {
  const context = useContext(WishlistContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
