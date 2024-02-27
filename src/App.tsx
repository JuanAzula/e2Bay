import './styles/App.css'
import { Products } from './components/products/Products'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { User } from './components/user/Users'
import { Home } from './components/home/Home'
import Wishlist from './components/Wishlist'
import { LoginForm } from './components/globals/Login'
import { useState } from 'react'
import { ProductDetail } from './components/products/ProductDetail'
import { Cart, Navbar } from './components/globals'
import { useFilters } from './hooks/useFilters'
import { getProducts } from './services/ProductService'
import { useQuery } from '@tanstack/react-query'
import { getUsers as fetchUsers } from './services/UserService'

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    return user
  }
}

export default function App () {
  const queryProduct = useQuery({
    queryKey: ['products'],
    queryFn: async () => await getProducts()
  }
  )

  const wishlistProduct = (id: string) => {
    const products = queryProduct.data
    const foundProduct = products?.filter(product => product.id === id)
    return foundProduct
  }
  wishlistProduct('f91eb86a8f6c973d5e8780a7c')
  const queryUsers = useQuery({
    queryKey: ['users'],
    queryFn: async () => await fetchUsers()
  })

  const queryUserLogged = useQuery({
    queryKey: ['user'],
    queryFn: async () => getUser()
  })

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(queryProduct?.data)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    if (username && password) {
      const user = queryUsers.data.find((user: { email: string, password: string }) => user.email === username && user.password === password)
      if (user) {
        window.localStorage.setItem('userLogged', JSON.stringify(user))
        void queryUserLogged.refetch()
        const navigate = useNavigate()
        navigate('/')
      } else {
        alert('Invalid username or password')
      }
      return user
    } else {
      alert('Login failed')
    }
  }
  const handleLogout = () => {
    window.localStorage.removeItem('userLogged')
    window.location.reload()
  }
  return (
    <>
      {
        queryUserLogged.data
          ? <>
            <BrowserRouter>
              <Navbar user={queryUserLogged.data} />
              <Cart />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products products={filteredProducts} />} />
                <Route path='/products/:productId' element={<ProductDetail products={queryProduct.data} />} />
                <Route path="/users" element={<User user={queryUserLogged.data} handleLogout={handleLogout} />} />
                <Route path="/wishlist/:userId" element={<Wishlist />} />
              </Routes>
            </BrowserRouter>
          </>
          : <LoginForm
            email={username}
            password={password}
            handleSubmit={handleLogin}
            handleUsernameChange={({ target }: React.ChangeEvent<HTMLInputElement>) => { setUsername(target.value) }}
            handlePasswordChange={({ target }: React.ChangeEvent<HTMLInputElement>) => { setPassword(target.value) }}
          />
      }
    </>
  )
}
