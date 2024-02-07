
export const LoginForm = ({ handleSubmit, handleUsernameChange, handlePasswordChange, email, password }) => {

    return (
        <div className='login--container'>
            <h1 className='login--header'>E2BAY</h1>

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
                <button className='button' style={{ height: '30px' }} type="submit">Login</button>
            </form>
        </div>
    )
}