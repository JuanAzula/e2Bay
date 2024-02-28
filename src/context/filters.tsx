import { createContext, useState } from 'react'

export const FiltersContext = createContext({} as any)

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  }
  )
  return (
        <FiltersContext.Provider value={
            {
              filters,
              setFilters
            }
        }
        >
            {children}
        </FiltersContext.Provider>
  )
}
