import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div `
    background: blueviolet;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    background: white;
    width: 30%;
    margin: 0 auto;
    padding: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Btn = styled.button `
    background: blueviolet;
    border: 1px black solid;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1rem;
    display: flex;
    justify-content: center;
    padding: 1rem 7rem;
    margin: 2rem auto;
    cursor: pointer;
`

export const Title = styled.h1 `
    font-size: 5rem;
    margin-bottom: 2rem;
`

export const Label = styled.label `
    display: block;
    margin: 1rem 0;
    font-size: 2rem;
`

export const Input = styled.input `
    display: block;
    border: none;
    border-bottom: 1px blueviolet solid;
    margin: 0.5rem 0;
    padding: 0.6rem 0.3rem;
    width: 100%;
`

export const LinkContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 40%;
    font-size: 1.5rem;
`
export const StyledLink = styled(Link)`
    font-size: 1.6rem;
    font-style: italic;
    text-decoration: none;
    color: black;
    margin: 0.2rem 0;
`