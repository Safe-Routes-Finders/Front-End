import React,{useState} from "react";
import {Btn, FormContainer, Title, Label, Input, LinkContainer, StyledLink, ParentContainer, Form, SubTitle, Error} from "./formsStyle";
import * as yup from "yup"
import SideImage from "./SideImage"
import Logo from "../Logo/Logo"

function SignUp(){
    const [formValues, setFormValues] = useState({
        email: "",
        username: "",
        password: "",
    })

    
    let schema = yup.object().shape({
        email: yup.string().email(),
        username: yup.string(),
        password: yup.string(),
      });

    const handleOnChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    }

    const Submit = (e) => {
        e.preventDefault();
        schema.validate(formValues)
            .then(valid=>{
                if(valid){
                    console.log(formValues)
            }})

    }

    return(
        <ParentContainer>
            <FormContainer>
                <Logo />
                <Form>
                    <SubTitle>SIGN UP</SubTitle> 
                    <Label> Email
                    <Input type="email" name="email"  placeholder="example@johndoe.com" id="email" onChange={handleOnChange} />
                    {/* <Error>{formValues.formErrors.emailError}</Error> */}
                    </Label>
                    <Label> New Password
                    <Input type="password"  name="password" placeholder="**********" onChange={handleOnChange} />
                    {/* <Error>{formValues.formErrors.passwordError}</Error>
                    <Error>{formValues.formErrors.checkPasswordError}</Error> */}
                    </Label>
                    <Btn onClick={Submit}>Sign Up</Btn>
                </Form>
                <LinkContainer>
                    <div>
                        <span>Already Have An Account? </span><StyledLink to="/">Sign In</StyledLink>
                    </div>
                </LinkContainer>
            </FormContainer>
            <SideImage></SideImage>
        </ParentContainer>
    )
}

export default SignUp