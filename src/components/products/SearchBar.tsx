import { useSearch } from "../../hooks/useSearch"


function SearchBar({ products }) {
    const handleSearch = (e) => {
        const searchTerm = e.target.value
        if (searchTerm && searchTerm !== '') {

            console.log(searchTerm)
            setSearchTerms(searchTerm)

            searchProducts(products)
        }
        console.log(products)
        console.log(searchedProducts)

    }
    const { setSearchTerms, searchProducts, searchedProducts } = useSearch()
    return (
        <div className="searchbar">
            <input type="search" onChange={handleSearch} />
        </div>
    )
}

export default SearchBar
