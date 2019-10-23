import React from "react";
// import "../assets/header.css"
import styled from "styled-components";
import logo from "../assets/logo.png"

function Header(){
    
    return(
        <div>
            <StyledHeader className="logo-text">
                <img src={logo} alt="Safe Routes Logo" />
                <h1>Safe Routes</h1>
            
            <StyledNav>
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="contact.html">Contact Us</a>
                <button>Submit</button>
            </StyledNav>
            </StyledHeader>
        </div>
    )
}

export default Header

const StyledHeader = styled.div`
  background-color: #5BD59B;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  h1{
      color: #1E2635;
      font-weight: bold;
  }
  .logo-text{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
  }
  img{
      width: 20%;
  }
`;

const StyledNav = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  button{
      display: block;
      background-color: #1E2635;
      cursor: pointer;
      width: 150px;
      height: 45px;
      font-size: 1.2rem;
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
      font-size: 1.2rem;
      font-family: 'Muli', sans-serif;
      color: #1E2635;
      text-decoration: none;
  }
`;