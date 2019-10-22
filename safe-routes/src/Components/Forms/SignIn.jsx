import React, {useState} from "react";
import {Btn, FormContainer, Title, Label, Input, LinkContainer, StyledLink, ParentContainer, SubTitle, Form} from "./formsStyle";
import Logo from "../Logo/Logo";
import SideImage from "./SideImage"

function Login(){

    const [formValues, setFormValues] = useState({
        email: "",
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
                <Logo />
                <Form>
                    <SubTitle>SIGN IN</SubTitle> 
                    <Label> Email
                    <Input type="email" name="email"  placeholder="example@johndoe.com" onChange={handleOnChange} />
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
            <SideImage />
        </ParentContainer>
    )
}

export default Login;