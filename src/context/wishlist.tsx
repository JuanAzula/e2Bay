import { createContext, useState } from 'react'
import { type Product } from '../interfaces/productsType'

export const WishlistContext = createContext({} as any)

function useWishlistReducer () {
  const initialWishlist = window.localStorage.getItem('wishlist')
  const wishlistChecked = initialWishlist ? JSON.parse(initialWishlist) : []
  const [wishlist, setWishlist] = useState(wishlistChecked)

  const addToWishlist = (product: Product) => {
    if (wishlist.find((item: Product) => item.id === product.id)) {
      return
    }

    window.localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]))
    setWishlist([...wishlist, product])
  }

  const removeFromWishlist = (product: Product) => {
    const newWishlist = wishlist.filter((item: Product) => item.id !== product.id)
    window.localStorage.setItem('wishlist', JSON.stringify(newWishlist))
    setWishlist(newWishlist)
  }

  return { wishlist, setWishlist, addToWishlist, removeFromWishlist }
}

export function WishlistProvider ({ children }: { children: React.ReactNode }) {
  const { wishlist, addToWishlist, removeFromWishlist, setWishlist } = useWishlistReducer()
  return (
                <WishlistContext.Provider value={{
                  wishlist,
                  setWishlist,
                  addToWishlist,
                  removeFromWishlist
                }}>
                        {children}
                </WishlistContext.Provider>
  )
}
