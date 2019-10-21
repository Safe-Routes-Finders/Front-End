import React, {useState} from "react";
import {Container, Btn, FormContainer, Title, Label, Input, LinkContainer, StyledLink} from "./formsStyle";
import {Link} from "react-router-dom"

function Login(){

    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    })
    

    const handleOnChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    }
    const Submit = (e) => {
        e.preventDefault();
        console.log("works for now", formValues)
    }


    const flex = {
        display: "flex",
        flexDirection: "column"
    }
    return(
        <Container>
        <FormContainer>
            <Title>SIGN IN</Title>
            <form style={flex}>
                <Label> Username
                <Input type="text" name="username"  placeholder="Username" onChange={handleOnChange} />
                </Label>
                <Label> Password
                <Input type="password"  name="password" placeholder="**********" onChange={handleOnChange} />
                </Label>
                <Btn onClick={Submit}>Log In</Btn>
            </form>
            <LinkContainer>
                <StyledLink to="/SignIn">Forgot Password?</StyledLink>
                <StyledLink to="/SignUp">Sign Up</StyledLink>
            </LinkContainer>
        </FormContainer>
        </Container>
    )
}

export default Login;