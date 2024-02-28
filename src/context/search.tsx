import { createContext, useState } from 'react'

export const SearchContext = createContext({} as any)

export function SearchProvider ({ children }: { children: React.ReactNode }) {
  const [searchTerms, setSearchTerms] = useState('')
  const [searchedProducts, setSearchedProducts] = useState([])
  return (
        <SearchContext.Provider value={
            {
              searchTerms,
              setSearchTerms,
              searchedProducts,
              setSearchedProducts
            }
        }>
            {children}
        </SearchContext.Provider>
  )
}
