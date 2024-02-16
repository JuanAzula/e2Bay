import { users } from './mocks/users.json'
import './styles/App.css'
import { Products } from './components/products/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './components/user/Users'
import { Home } from './components/home/Home'
import { LoginForm } from './components/globals/Login'
import { useEffect, useState } from 'react'
import UserDetail from './components/user/UsersDetail'
import { ProductDetail } from './components/products/ProductDetail'
import { Cart, Navbar } from './components/globals'
import { useFilters } from './hooks/useFilters'
import { getProducts } from './services/ProductService'

async function fetchProducts (setProducts) {
  try {
    const sProducts = await getProducts()
    console.log(sProducts)
    setProducts(sProducts)
    return sProducts
  } catch (err) {
    console.log(err)
    return []
  }
}

export default function App () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts(setProducts)

    console.log('h')
  }, [])

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  // const navigate = useNavigate()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('userLogged')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleLogin = async (event) => {
    event.preventDefault()

    if (username && password) {
      const user = users.find((user) => user.email === username && user.password === password)
      if (user) {
        setUser(user)
        window.localStorage.setItem('userLogged', JSON.stringify(user))
      } return user
    } else {
      console.log('Login failed')
      return user
    }
  }
  const handleLogout = () => {
    window.localStorage.removeItem('userLogged')
    setUser(null)
    console.log(user)
    window.location.reload()
  }
  return (
    <>
      {
        user
          ? <>
            <BrowserRouter>
              <Navbar user={user} />
              <Cart />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products products={filteredProducts} />} />
                <Route path='/products/:productId' element={<ProductDetail products={products} />} />
                <Route path="/users/:userId" element={<UserDetail users={users} />} />
                <Route path="/users" element={<User users={users} handleLogout={handleLogout} userId={user.id} />} />
                <Route path="/wishlist/:userId" element={<UserDetail users={users} />} />
              </Routes>
            </BrowserRouter>
          </>
          : <LoginForm
            username={username}
            password={password}
            handleSubmit={handleLogin}
            handleUsernameChange={({ target }) => { setUsername(target.value) }}
            handlePasswordChange={({ target }) => { setPassword(target.value) }}
          />
      }
    </>
  )
}
