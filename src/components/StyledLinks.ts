import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        color: #09f;
    }
`
