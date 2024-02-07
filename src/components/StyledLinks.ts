import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        color: #f02d34;
    }

    &.active {
        color: #f02d34 !important;
    }
`
