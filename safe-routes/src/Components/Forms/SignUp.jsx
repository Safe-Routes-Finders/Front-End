import React,{useState} from "react";
import {Btn, FormContainer, Title, Label, Input, LinkContainer, StyledLink, ParentContainer, Form, SubTitle, ImgContainer, Error} from "./formsStyle";
import * as yup from "yup"

function SignUp(){
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        checkPassword: "",
    })
    
    let schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email(),
        username: yup.string(),
        password: yup.string(),
      });

    const handleOnChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    }

    const Submit = (e) => {
        e.preventDefault();
        schema.isValid(formValues)
            .then(valid=>{
                if(valid){
                    console.log(formValues)
                } else{
                    console.log("not valid")
                }
            })

    }

    return(
        <ParentContainer>
            <FormContainer>
                <Title>Safe-Routes</Title>
                <Form>
                    <SubTitle>SIGN UP</SubTitle> 
                    <Label> First Name
                    <Input type="text" name="firstName"  placeholder="John" onChange={handleOnChange} />
                    <Error></Error>
                    </Label>
                    <Label> Last Name
                    <Input type="text" name="lastName"  placeholder="Doe" onChange={handleOnChange} />
                    {/* <Error>{formValues.formErrors.lastNameError}</Error> */}
                    </Label>
                    <Label> Email
                    <Input type="email" name="email"  placeholder="example@johndoe.com" id="email" onChange={handleOnChange} />
                    {/* <Error>{formValues.formErrors.emailError}</Error> */}
                    </Label>
                    <Label> Username
                    <Input type="text" name="username"  placeholder="Username" onChange={handleOnChange} />
                    {/* <Error>{formValues.formErrors.usernameError}</Error> */}
                    </Label>
                    <Label> Password
                    <Input type="password"  name="password" placeholder="**********" onChange={handleOnChange} />
                    {/* <Error>{formValues.formErrors.passwordError}</Error>
                    <Error>{formValues.formErrors.checkPasswordError}</Error> */}
                    </Label>
                    <Label>Check Password
                    <Input type="password"  name="checkPassword" placeholder="**********" onChange={handleOnChange} />
                    {/* <Error>{formValues.formErrors.checkPasswordError}</Error> */}
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