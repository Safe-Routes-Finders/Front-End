import React from 'react'
import logo from "../assets/logo.png";

import styled from "styled-components";

const StyledFooter = styled.footer`
  
    background-color: #5BD59B;
    display: flex;

    img{
        width: 100px;
    }

`;

function Footer() {
    return (
        <StyledFooter>
        <img src={logo} alt="Safe Routes Logo" />
        </StyledFooter>
    )
}

export default Footer;
