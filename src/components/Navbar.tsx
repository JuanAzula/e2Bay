import React from 'react'
import { StyledLink } from './StyledLinks'

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
            <span className='cart-icon' type='button' onClick="" style={{ marginLeft: '10px', cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
            </svg>
                <span className='cart-item-qty'>{user?.cart?.length}</span>
            </span>
        </header>
    )
}

export default Navbar
