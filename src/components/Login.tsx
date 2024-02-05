import { useState } from 'react'
import { users } from '../mocks/users.json'
import { useNavigate } from 'react-router-dom'




export const LoginForm = ({ handleSubmit, handleUsernameChange, handlePasswordChange, email, password }) => {

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input
                className='input'
                type="text"
                value={email}
                id="email"
                placeholder="Email"
                onChange={handleUsernameChange}

            />
            <input
                className='input'
                type="password"
                // value={password}
                password={password}
                id="password"
                placeholder="Password"
                onChange={handlePasswordChange}
            />
            <button className='button' type="submit">Login</button>
        </form>
    )
}