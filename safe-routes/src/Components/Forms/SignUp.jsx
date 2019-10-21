import React,{useState} from "react";
import {Btn, FormContainer, Title, Label, Input, LinkContainer, StyledLink, ParentContainer, Form, SubTitle, ImgContainer} from "./formsStyle";

function SignUp(){
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        checkPassword: "",

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
                    <SubTitle>SIGN UP</SubTitle> 
                    <Label> First Name
                    <Input type="text" name="firstName"  placeholder="John" onChange={handleOnChange} />
                    </Label>
                    <Label> Last Name
                    <Input type="text" name="lastName"  placeholder="Doe" onChange={handleOnChange} />
                    </Label>
                    <Label> Email
                    <Input type="email" name="email"  placeholder="example@johndoe.com" onChange={handleOnChange} />
                    </Label>
                    <Label> Username
                    <Input type="text" name="username"  placeholder="Username" onChange={handleOnChange} />
                    </Label>
                    <Label> Password
                    <Input type="password"  name="password" placeholder="**********" onChange={handleOnChange} />
                    </Label>
                    <Label>Check Password
                    <Input type="password"  name="checkPassword" placeholder="**********" onChange={handleOnChange} />
                    </Label>
                    <Btn onClick={Submit}>Sign Up</Btn>
                </Form>
                <LinkContainer>
                    <div>
                        <span>Already Have An Account? </span><StyledLink to="/SignIn">Sign In</StyledLink>
                    </div>
                </LinkContainer>
            </FormContainer>
            <ImgContainer>
                <Title>Drive Safe With Us!</Title>
            </ImgContainer>
        </ParentContainer>
    )
}

export default SignUp