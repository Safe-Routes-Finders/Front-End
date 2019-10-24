import styled from "styled-components";
import {Link} from "react-router-dom";


export const FormContainer = styled.div`
    background: white;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    flex: 2;
    height: 100%;
    justify-content: space-around;
`

export const Btn = styled.button `
    background: #16416C;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    padding: 2rem 7rem;
    border: none;
    cursor: pointer;
`

export const Title = styled.h1 `
    font-size: 5rem;
    color: #16416c
`

export const Label = styled.label `
    display: block;
    margin: 1rem 0;
    font-size: 2rem;
`

export const Input = styled.input `
    display: block;
    border: none;
    border-bottom: 1px #16416C solid;
    margin: 0.5rem 0;
    padding: 0.6rem 0.3rem;
    width: 100%;
    &:focus{
        outline: none;
    }
`

export const LinkContainer = styled.div `
    font-size: 1.5rem;
    justify-self: flex-end;
`
export const StyledLink = styled(Link)`
    font-size: 1.6rem;
    font-style: italic;
    text-decoration: none;
    color: black;
    margin: 0.2rem 0;
`

export const ParentContainer = styled.div `
    width: 100%;
    display: flex;
    border-radius: 1rem;
    height: 100vh;
`

export const ImgContainer = styled.div `
    flex: 5;
    background:linear-gradient(90deg, rgba(255, 255, 255,1) 0%, rgb(255, 255, 255,0.1) 100%), url("https://images.unsplash.com/photo-1524645343120-a4ae9f7d4343?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80") no-repeat center center /cover;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubTitle = styled.h2 `
    font-size: 3rem;
    color: #1E2635;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Error = styled.p`
    font-size: 1.3rem;
    color: red;
`