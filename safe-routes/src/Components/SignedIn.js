import React from "react";
import UserInfo from "./UserInfo.js"
import {MainContainer} from "../assets/style"
import Header from "./Header"
import Footer from "./Footer"

import SafeMap from "../Components/SafeMap";
import Users from "../Components/Users";

const SignedIn = (props) => {
    return (
        <div>
            <Header 
            {...props}
            />
            {/* <Users /> */}
            <MainContainer>
                <SafeMap />
                <UserInfo {...props}/>
            </MainContainer>
            <Users />
            <Footer />
        </div>
    )
}

export default SignedIn;