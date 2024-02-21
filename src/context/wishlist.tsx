import { createContext, useState } from 'react'
import { type Product } from '../interfaces/productsType'

export const WishlistContext = createContext({} as any)

function useWishlistReducer () {
  const initialWishlist = window.localStorage.getItem('wishlist')
  const wishlistChecked = initialWishlist ? JSON.parse(initialWishlist) : []
  const [wishlist, setWishlist] = useState(wishlistChecked)
  const user = window.localStorage.getItem('userLogged')
  console.log('wishlist:', wishlist)
  console.log(user)
  const userObject = JSON.parse(user || '{}')

  for (const p in userObject?.wishlist) {
    console.log(userObject.wishlist[p])
  }

  const addToWishlist = (product: Product) => {
    // Check if the product is already in the wishlist
    if (wishlist.find((item: Product) => item.id === product.id)) {
      return
    }

    userObject.wishlist.push(product)
    window.localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]))
    window.localStorage.setItem('userLogged', JSON.stringify(userObject))
    setWishlist([...wishlist, product])
  }

  const removeFromWishlist = (product: Product) => {
    const newWishlist = wishlist.filter((item: Product) => item.id !== product.id)
    window.localStorage.setItem('wishlist', JSON.stringify(newWishlist))
    setWishlist(newWishlist)
  }

  return { wishlist, addToWishlist, removeFromWishlist }
}

export function WishlistProvider ({ children }: { children: React.ReactNode }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistReducer()
  return (
                <WishlistContext.Provider value={{
                  wishlist,
                  addToWishlist,
                  removeFromWishlist
                }}>
                        {children}
                </WishlistContext.Provider>
  )
}
