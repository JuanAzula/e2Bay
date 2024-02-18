import { createContext, useState } from 'react'

export const WishlistContext = createContext({} as any)

function useWishlistReducer () {
  const user = window.localStorage.getItem('userLogged')
  const [wishlist, setWishlist] = useState([window.localStorage.getItem('wishlist') ? JSON.parse(window.localStorage.getItem('wishlist')) : []])
  console.log(user)
  const userObject = JSON.parse(user)

  for (const p in userObject?.wishlist) {
    console.log(userObject.wishlist[p])
  }

  const addToWishlist = (product) => {
    window.localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]))
    window.localStorage.setItem('userLogged', JSON.stringify({ ...userObject, wishlist: [...wishlist, product] }))
    setWishlist([...wishlist, product])
  }

  const removeFromWishlist = (product) => {
    const newWishlist = wishlist.filter((item) => item.id !== product.id)
    window.localStorage.setItem('wishlist', JSON.stringify(newWishlist))
    setWishlist(newWishlist)
  }

  return { wishlist, addToWishlist, removeFromWishlist }
}

export function WishlistProvider ({ children }) {
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
