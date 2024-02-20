import { type User as UserType } from '../../interfaces/usersType'
import { StyledLink } from '../StyledLinks'

export const User: React.FC<{ user: UserType, handleLogout: () => void }> = ({ user, handleLogout }) => {
  return (
        <>
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
