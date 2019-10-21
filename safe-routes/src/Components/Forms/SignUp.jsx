import React,{useState} from "react";
import {Btn, FormContainer, Title, Label, Input, LinkContainer, StyledLink, ParentContainer, Form, SubTitle, ImgContainer, Error} from "./formsStyle";
import * as Yup from "yup"

function SignUp(){
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        checkPassword: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        checkPasswordError: ""

    })
    

    const handleOnChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    }

    const validate = () => {
        if(!formValues.email.includes('@')){
            setFormValues({...formValues , ["emailError"]: "Invalid Email" })
            return false;
        } else if(formValues.firstName.length === 0){
            setFormValues({...formValues , ["firstNameError"]: "Enter Your First Name" })
            return false;
        } else if(formValues.lastName.length === 0){
            setFormValues({...formValues , ["lastNameError"]: "Enter Your Last Name" })
            return false;
        } else if(formValues.username.length === 0){
            setFormValues({...formValues , ["usernameError"]: "Enter An Username, You Will Use This To Sign In" })
            return false;
        } else if(formValues.password.length < 7 || formValues.password.length > 15){
            setFormValues({...formValues , ["passwordError"]: "Password Must Be Between 8 and 14 Characters" })
            return false;
        } else if(formValues.password !== formValues.checkPassword){
            setFormValues({...formValues , ["checkPasswordError"]: "Passwords Must Match" })
            return false;
        }
        return true;
    }
    const Submit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid){
            console.log("works for now", formValues)
        }
        console.log(formValues.emailError)
    }

    return(
        <ParentContainer>
            <FormContainer>
                <Title>Safe-Routes</Title>
                <Form>
                    <SubTitle>SIGN UP</SubTitle> 
                    <Label> First Name
                    <Input type="text" name="firstName"  placeholder="John" onChange={handleOnChange} />
                    <Error>{formValues.firstNameError}</Error>
                    </Label>
                    <Label> Last Name
                    <Input type="text" name="lastName"  placeholder="Doe" onChange={handleOnChange} />
                    </Label>
                    <Label> Email
                    <Input type="email" name="email"  placeholder="example@johndoe.com" id="email" onChange={handleOnChange} />
                    <Error>{formValues.emailError}</Error>
                    </Label>
                    <Label> Username
                    <Input type="text" name="username"  placeholder="Username" onChange={handleOnChange} />
                    <Error>{formValues.usernameError}</Error>
                    </Label>
                    <Label> Password
                    <Input type="password"  name="password" placeholder="**********" onChange={handleOnChange} />
                    <Error>{formValues.passwordError}</Error>
                    <Error>{formValues.checkPasswordError}</Error>
                    </Label>
                    <Label>Check Password
                    <Input type="password"  name="checkPassword" placeholder="**********" onChange={handleOnChange} />
                    <Error>{formValues.checkPasswordError}</Error>
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