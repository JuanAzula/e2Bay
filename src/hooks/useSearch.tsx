import { useContext } from "react"
import { SearchContext } from "../context/search"

export const useSearch = () => {
    const { searchTerms, setSearchTerms } = useContext(SearchContext)
    const searchedProducts = []
    const searchProducts = (products) => {
        products.filter((product) => {
            if (product.name.toLowerCase().includes(searchTerms.toLowerCase())) {
                searchedProducts.push(product)
            }
        })
    }
    return { searchTerms, setSearchTerms, searchedProducts, searchProducts }
}

