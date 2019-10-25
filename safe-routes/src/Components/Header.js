import React from "react";
// import "../assets/header.css"
import styled from "styled-components";
import logo from "../assets/logo.png";

function Header(props){
    const signOut = (e) => {
        localStorage.removeItem("token");
        props.history.push("/")
    }
    
    return(
        <StyledParent>
            <StyledHeader className="logo-text">
                <img src={logo} alt="Safe Routes Logo" />
                <h1>Safe Routes</h1>
           
            <StyledNav>
                <a href="https://vigilant-bohr-81f761.netlify.com/index.html">Home</a>
                <a href="https://vigilant-bohr-81f761.netlify.com/about.html">About Us</a>
                <a href="https://vigilant-bohr-81f761.netlify.com/contact.html">Contact Us</a>
                <button onClick={signOut}>Sign Out</button>
            </StyledNav>
            </StyledHeader>
        </StyledParent>
    )
}

export default Header

const StyledParent = styled.div`
display: flex;
justify-content: flex-start;
`;

const StyledHeader = styled.div`
  background-color: #5BD59B;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 10rem;
  width: 100%;
  h1{
      color: #1E2635;
      font-weight: bold;
      width: 450px;
      font-size: 4rem;
  }
  .logo-text{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
  }
  img{
      width: 12rem;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  button{
      display: block;
      background-color: #1E2635;
      cursor: pointer;
      width: 150px;
      height: 45px;
      margin:3vh;
      font-size: 2rem;
      text-decoration: none;
      border-radius: 10px;
      border: 0;
      color: #F3EDE6;
      font-weight: 700;
  }
  button:hover{
      background-color: #F3EDE6;
      color: #1E2635;
      border: 2px solid #1E2635;
  }
  a{
      margin:3vh;
      font-size: 2rem;
      font-family: 'Muli', sans-serif;
      color: #1E2635;
      text-decoration: none;
      
  }
`;