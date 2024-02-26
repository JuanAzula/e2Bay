import { useState } from 'react'

export const LoginForm: React.FC<{
  handleSubmit: (event: React.FormEvent) => void
  handleUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  email: string
  password: string
}> =
({ handleSubmit, handleUsernameChange, handlePasswordChange, email, password }) => {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateEmail = (input: string) => {
    if (input.trim() === '') {
      setEmailError('Email or username is required')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = (input: string) => {
    if (input.length < 6) {
      setPasswordError('Password must be at least 6 characters')
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError('Password must contain at least one uppercase letter')
    } else if (!/[\W_]/.test(input)) {
      setPasswordError('Password must contain at least one special character')
    } else {
      setPasswordError('')
    }
  }

  const handleUsernameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUsernameChange(event)
    validateEmail(event.target.value)
  }

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlePasswordChange(event)
    validatePassword(event.target.value)
  }

  return (
        <div className='login--container'>
            <h1 className='login--header'>E2BAY</h1>

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    className='input'
                    type="text"
                    value={email}
                    id="email"
                    placeholder="email or username"
                    onChange={handleUsernameInputChange}

                />
                <input
                    className='input'
                    type="password"
                    value={password}
                    id="password"
                    placeholder="password"
                    onChange={handlePasswordInputChange}
                />
                {passwordError && <div className="error-password">{passwordError}</div>}
                {emailError && <div className="error-email">{emailError}</div>}
                <button className='button' style={{ height: '30px' }} type="submit">Login</button>
            </form>
        </div>
  )
}
