import { users } from './mocks/users.json'
import './styles/App.css'
import { Products } from './components/products/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './components/user/Users'
import { Home } from './components/home/Home'
import { LoginForm } from './components/globals/Login'
import { useState } from 'react'
import UserDetail from './components/user/UsersDetail'
import { ProductDetail } from './components/products/ProductDetail'
import { Cart, Navbar } from './components/globals'
import { useFilters } from './hooks/useFilters'
import { getProducts } from './services/ProductService'
import { type Product } from './interfaces/productsType'
import { useQuery } from '@tanstack/react-query'

const getUser = (setUser: any) => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    return user
  }
}

export default function App () {
  const queryProduct = useQuery({
    queryKey: ['products'],
    queryFn: async () => await getProducts()
  }
  )
  const [products, setProducts] = useState([queryProduct.data as Product || []])

  const queryUser = useQuery({
    queryKey: ['user'],
    queryFn: async () => getUser(setUser)
  })

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(queryProduct.data)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    if (username && password) {
      const user = users.find((user) => user.email === username && user.password === password)
      if (user) {
        setUser(user)
        window.localStorage.setItem('userLogged', JSON.stringify(user))
        queryUser.refetch()
      } return user
    } else {
      console.log('Login failed')
      return user
    }
  }
  const handleLogout = () => {
    window.localStorage.removeItem('userLogged')
    setUser(null)
    window.location.reload()
  }
  return (
    <>
      {
        queryUser.data
          ? <>
            <BrowserRouter>
              <Navbar user={user} />
              <Cart />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products products={filteredProducts} />} />
                <Route path='/products/:productId' element={<ProductDetail products={queryProduct.data} />} />
                <Route path="/users/:userId" element={<UserDetail users={users} />} />
                <Route path="/users" element={<User users={users} handleLogout={handleLogout} userId={queryUser.data?.id} />} />
                <Route path="/wishlist/:userId" element={<UserDetail users={users} />} />
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
