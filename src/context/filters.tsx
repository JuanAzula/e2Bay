import { createContext, useState } from 'react'

// 1. El que hay que consumir
export const FiltersContext = createContext({} as any)

// 2. El que provee el acceso al contexto
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
