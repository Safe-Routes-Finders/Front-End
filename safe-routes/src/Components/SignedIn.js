import React from "react";
import UserInfo from "./UserInfo"
import {MainContainer} from "../assets/style"
import Header from "./Header"
import Footer from "./Footer"

import SafeMap from "../Components/SafeMap";
import Users from "../Components/Users";

const SignedIn = () => {
    return (
        <div>
            <Header />
            {/* <Users /> */}
            <MainContainer>
                <SafeMap />
                <UserInfo />
            </MainContainer>
            <Footer />
        </div>
    )
}

export default SignedIn;