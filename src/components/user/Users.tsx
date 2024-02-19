import { type UsersType } from '../../interfaces/usersType'
import { StyledLink } from '../StyledLinks'

interface UserProps {
  user: UsersType['users']
  handleLogout: () => void
}

export const User: React.FC<UserProps> = ({ user, handleLogout }) => {
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
