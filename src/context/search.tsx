import { createContext, useState } from 'react'

export const SearchContext = createContext({} as any)

export function SearchProvider ({ children }: { children: React.ReactNode }) {
  const [searchTerms, setSearchTerms] = useState('')
  return (
        <SearchContext.Provider value={
            {
              searchTerms,
              setSearchTerms
            }
        }>
            {children}
        </SearchContext.Provider>
  )
}
