import { StyledLink } from "../StyledLinks"

export const Users = ({ users, handleLogout }) => {
    return (
        <main className="users">
            <h1>Users</h1>
            <ul>
                {users.map((user) => {
                    return (
                        <>
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`}>
                                    <h3>{user.name}</h3>
                                </Link>
                                <p>{user.email}</p>
                            </li>
                        </>
                    )
                })}
            </ul>
            <button>
                <StyledLink to="/" onClick={handleLogout}>Logout</StyledLink>
            </button>
        </main>

    )
}