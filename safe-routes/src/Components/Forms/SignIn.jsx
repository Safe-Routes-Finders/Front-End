import React, {useState} from "react";
import {Btn, FormContainer, Label, Input, LinkContainer, StyledLink, ParentContainer, SubTitle, Form, Error} from "./formsStyle";
import Logo from "../Logo/Logo";
import SideImage from "./SideImage"

import axios from "axios";

// import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";
import { postLogin } from "../actions";

const SignIn = props => {

    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    })
    const [invalidError, setInvalidError] = useState("")
    
    const handleOnChange = (e) => {

        setFormValues(
            {...formValues,
            [e.target.name]: e.target.value});
    }

    const Submit = (e) => {
        e.preventDefault();
        console.log("im clicked");
        props.postLogin(formValues,props);
        setFormValues(formValues)
    
        // axios
        // .post(`https://detman-saferoutes.herokuapp.com/login`, `grant_type=password&username=${formValues.username}&password=${formValues.password}`,{
        //     headers: {
        //       // btoa is converting our client id/client secret into base64
        //       Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        //       'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        //   })
        // .then(response => {
        //   console.log("Post Response", response)
        //   localStorage.setItem('token', response.data.access_token)
        //   props.history.push("/map")
        // })
        // .catch(error => {
        //   console.log(error)
        //   setFormValues({username: "", password: ""})
        //   setInvalidError("Wrong username or password")
        // })
      }

    return(
        <ParentContainer>
            <FormContainer>
                <Logo />
                <Form>
                    <SubTitle>SIGN IN</SubTitle>
                    <Error>{invalidError}</Error>
                    <Label> Username
                    <Input 
                    type="text" 
                    name="username"  
                    placeholder="johndoe"
                    value={formValues.username}
                    onChange={handleOnChange} />
                    </Label>
                    <Label> Password
                    <Input 
                    type="password"  
                    name="password" 
                    placeholder="**********" 
                    value={formValues.password}
                    onChange={handleOnChange} />
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

// export default Login;
const mapStateToProps = state => {
    return {
        // formValues: state.formValues, 
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {postLogin}
)(SignIn);