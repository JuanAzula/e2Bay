import styled from 'styled-components'

export const StyledSelect = styled.select`
    border-radius: 10px;
    outline: 2px solid #F20179;
    border: 0;
    margin: -5px 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    outline-offset: 3px;
    padding: 10px 1rem;
    transition: 0.25s;
    width: 100%;
    &:focus {
        outline-offset: 5px;
        background-color: #fff;
    }
`
