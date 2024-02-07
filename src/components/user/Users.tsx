import { BrowserRouter, Link, Route } from "react-router-dom"
import { UsersType } from "../../interfaces/usersType"
import UserDetail from "./UsersDetail"
import { StyledLink } from "../StyledLinks"

export const User = ({ users, handleLogout, userId }) => {
    const user = users.find((user) => user.id == userId)

    return (
        <>
            <h1 className="users--header">Users</h1>
            <main className="users">
                <img className="users__img" src="../src/assets/user-profile-flatline.svg" alt="user-profile image" />
                <li key={user.id} className="users__li">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </li>
                <button className="users__button" onClick={handleLogout}>
                    <StyledLink to="/">Logout</StyledLink>
                </button>
            </main>
        </>

    )
}