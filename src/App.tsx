import { products } from './mocks/products.json'
import { users } from './mocks/users.json'
import './styles/App.css'
import { Products } from './components/products/Products'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { StyledLink } from './components/StyledLinks'
import { Product, ProductsType } from './interfaces/productsType'
import { User } from './components/user/Users'
import { Home } from './components/home/Home'
import { LoginForm } from './components/globals/Login'
import { useEffect, useState } from 'react'
import UserDetail from './components/user/UsersDetail'
import { ProductDetail } from './components/products/ProductDetail'
import { Cart, Navbar } from './components/globals'
import { Toaster } from 'react-hot-toast'



export default function App() {

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


  const handleLogin = async (event) => {
    event.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (email && password && email instanceof HTMLInputElement && password instanceof HTMLInputElement) {
      const emailValue = email.value
      const passwordValue = password.value
      console.log(emailValue, passwordValue)

      const user = users.find((user) => user.email === emailValue && user.password === passwordValue)
      if (user) {
        console.log('Login successful')
        setUser(user)
        window.localStorage.setItem('userLogged', JSON.stringify(user))
        // navigate('/')

        return user
      } else {
        console.log('Login failed')
        return user
      }
    }
  }
  const handleLogout = () => {
    window.localStorage.removeItem('userLogged')
    setUser(null)
    console.log(user)
    window.location.reload();
  }
  return (
    <>
      {
        user
          ? <>
            <BrowserRouter>
              <Navbar user={user}>
                <Toaster />
              </Navbar>
              <Cart />
              <button className='cart-icon' type='button' onClick="" style={{ marginLeft: '10px', cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
                <span className='cart-item-qty'>{user?.cart?.length}</span>
              </button>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products products={products} />} />
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
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
          />
      }
    </>
  )
}


