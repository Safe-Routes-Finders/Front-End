import React, {useState} from "react";
import {Btn, FormContainer, Label, Input, LinkContainer, StyledLink, ParentContainer, SubTitle, Form, Error} from "./formsStyle";
import Logo from "../Logo/Logo";
import SideImage from "./SideImage"
import { connect } from "react-redux";
import { postLogin } from "../actions";
import logo from "../../assets/logo.png";

const SignIn = props => {

    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    })
    
    const handleOnChange = (e) => {

        setFormValues(
            {...formValues,
            [e.target.name]: e.target.value});
    }

    const Submit = (e) => {
        e.preventDefault();
        props.postLogin(formValues,props);

      }

    return(
        <ParentContainer>
            <FormContainer>
                <Logo />
                <Form>
                    <SubTitle>SIGN IN</SubTitle>
                    <Error>{props.error}</Error>
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
                    {/* <StyledLink to="/SignIn">Forgot Password?</StyledLink> */}
                    <img className="logo" src={logo} alt="Safe Routes Logo" />
                    <div>
                    
                        <span>Don't Have An Account? </span><StyledLink to="/SignUp">Sign Up</StyledLink>
                    </div>
                </LinkContainer>
            </FormContainer>
            <SideImage />
        </ParentContainer>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {postLogin}
)(SignIn);