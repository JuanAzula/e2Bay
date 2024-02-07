import { StyledLink } from '../StyledLinks'

const Navbar = ({ user }: { user: any }) => {
    return (
        <header style={{ marginTop: '15px' }} className='header--routes'>
            <StyledLink to='/' style={{ marginLeft: '10px' }}>
                Home
            </StyledLink>
            <StyledLink to='/products' style={{ marginLeft: '10px' }}>
                Products
            </StyledLink>
            <StyledLink to={`/wishlist/${user.id}`} style={{ marginLeft: '10px' }}>
                Wishlist
            </StyledLink>
            <StyledLink to='/users' style={{ marginLeft: '10px' }}>
                User
            </StyledLink>

        </header>
    )
}

export default Navbar
