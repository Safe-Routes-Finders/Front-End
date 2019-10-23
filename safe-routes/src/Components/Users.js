import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth"
// import axios from "axios";

const Users = () => {

    const [ user, setUser ] = useState()
    const [ editUser, setEditUser ] = useState()

    useEffect(() => {
        axiosWithAuth()
        .get("/users", {
                headers: {
                  // btoa is converting our client id/client secret into base64
                  Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              })
        .then(response => {
            // .data?
            console.log("User Get Res", response)
            setUser(response)
        })
        .catch(error => {
            console.log("User Get", error)
        })
    }, [])

    const deleteUser = id => {
        axiosWithAuth()
        .delete(`/users/${id}`)
        .then(response => {
            // .data?
            console.log("Delete Response", response)
            setUser(response)
        })
    }

    return (
        <div>
            <h1>users</h1>
        </div>
    )
}

export default Users;