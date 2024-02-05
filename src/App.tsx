import { products } from './mocks/products.json'
import { users } from './mocks/users.json'
import './css/App.css'
import { Products } from './components/Products'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { StyledLink } from './components/StyledLinks'
import { Product, ProductsType } from './interfaces/productsType'
import { User } from './components/Users'
import { Home } from './components/Home'
import { LoginForm } from './components/Login'
import { useEffect, useState } from 'react'
import UserDetail from './components/UsersDetail'
import { ProductDetail } from './components/ProductDetail'



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

  if (user) {
    console.log(user)

    return (
      <>
        <BrowserRouter>
          <header style={{ marginTop: '15px' }} className='header--routes'>
            <StyledLink to='/' style={{ marginLeft: '10px' }}>
              Home
            </StyledLink>
            <StyledLink to='/products' style={{ marginLeft: '10px' }}>
              Products
            </StyledLink>
            <StyledLink to='/users' style={{ marginLeft: '10px' }}>
              Users
            </StyledLink>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products products={products} />} />
            <Route path='/products/:productId' element={<ProductDetail products={products} />} />
            <Route path="/users/:userId" element={<UserDetail users={users} />} />
            <Route path="/users" element={<User users={users} handleLogout={handleLogout} userId={user.id} />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  } else {
    return (
      <LoginForm
        username={username}
        password={password}
        handleSubmit={handleLogin}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
      />
    )
  }
}

