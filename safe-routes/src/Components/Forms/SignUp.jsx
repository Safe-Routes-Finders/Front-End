import React,{useState} from "react";
import {Btn, FormContainer, Label, Input, LinkContainer, StyledLink, ParentContainer, Form, SubTitle} from "./formsStyle";
import * as yup from "yup"
import SideImage from "./SideImage"
import Logo from "../Logo/Logo"
import { connect } from "react-redux";
import { postUser } from "../actions";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import axios from "axios"
function SignUp(props){
    const [formValues, setFormValues] = useState({
        primaryemail: "",
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
                    axios
                    .post("https://detman-saferoutes.herokuapp.com/users/user", formValues,{
                            headers: {
                              // btoa is converting our client id/client secret into base64
                              Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                              'Content-Type': 'application/x-www-form-urlencoded'
                            }
                          })
                    .then(response => {
                        console.log("Post Res", response.data)
                        // props.setUser(response)
                        // setNewUser({
                        //     ...newUser,
                        //     username: "",
                        //     password: "",
                        //     email: ""
                        // });
                    })
                    .catch(error => console.log("Post Error", error.response))

            }})

    }

    return(
        <ParentContainer>
            <FormContainer>
                <Logo />
                <Form>
                    <SubTitle>SIGN UP</SubTitle> 
                    <Label> Email
                    <Input type="email" name="primaryemail"  placeholder="example@johndoe.com" id="email" onChange={handleOnChange} />
                    </Label>
                    <Label> Username
                    <Input type="text" name="username"  placeholder="johndoe" id="email" onChange={handleOnChange} />
                    </Label>
                    <Label> New Password
                    <Input type="password"  name="password" placeholder="**********" onChange={handleOnChange} />
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

// export default SignUp

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {postUser}
)(SignUp);