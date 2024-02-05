import { BrowserRouter, Link, Route } from "react-router-dom"
import { UsersType } from "../interfaces/usersType"
import UserDetail from "../components/UsersDetail"
import { StyledLink } from "../components/StyledLinks"

export const User = ({ users, handleLogout, userId }) => {
    const user = users.find((user) => user.id == userId)

    return (
        <main className="users">
            <h1>Users</h1>
            <>
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        <h3>{user.name}</h3>
                    </Link>
                    <p>{user.email}</p>
                </li>
            </>
            <button>
                <StyledLink to="/" onClick={handleLogout}>Logout</StyledLink>
            </button>
        </main>

    )
}