import React, {useState} from "react";
import {Btn, FormContainer, Title, Label, Input, LinkContainer, StyledLink, ParentContainer, ImgContainer, SubTitle, Form} from "./formsStyle";

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


    return(
        <ParentContainer>
            <FormContainer>
                <Title>Safe-Routes</Title>
                <Form>
                    <SubTitle>SIGN IN</SubTitle> 
                    <Label> Username
                    <Input type="text" name="username"  placeholder="Username" onChange={handleOnChange} />
                    </Label>
                    <Label> Password
                    <Input type="password"  name="password" placeholder="**********" onChange={handleOnChange} />
                    </Label>
                    <Btn onClick={Submit}>Sign In</Btn>
                </Form>
                <LinkContainer>
                    <StyledLink to="/SignIn">Forgot Password?</StyledLink>
                    <div>
                        <span>Don't Have An Account? </span><StyledLink to="/SignUp">Sign Up</StyledLink>
                    </div>
                </LinkContainer>
            </FormContainer>
            <ImgContainer>
                <Title>Drive Safe With Us!</Title>
            </ImgContainer>
        </ParentContainer>
    )
}

export default Login;