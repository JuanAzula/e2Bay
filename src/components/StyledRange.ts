import styled from 'styled-components'

export const StyledRange = styled.input`
    -webkit-appearance: none;
    width: 100%;
    margin: 5px 0;
    height: 10px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 10px;
    &:hover {
        opacity: 1;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #F20179;
        cursor: pointer;
    }
    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #F20179;
        cursor: pointer;
    }
    `
