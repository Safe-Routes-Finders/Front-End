import React from "react";

import SafeMap from "../Components/NotApp";
import Users from "../Components/Users";

const SignedIn = () => {
    return (
        <div>
            <h1>Stay Safe!</h1>
            <Users />
            <SafeMap />
        </div>
    )
}

export default SignedIn;