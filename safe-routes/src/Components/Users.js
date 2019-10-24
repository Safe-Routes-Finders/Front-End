import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth"
import AddUser from "../Components/AddUser"
// import axios from "axios";

const Users = () => {

    const [ user, setUser ] = useState([])
    const [ editingUser, setEditingUser ] = useState()
    const [userDelete, setUserDelete] = useState(false)

    useEffect(() => {
        axiosWithAuth()
        .get("/users/users/all")
        .then(response => {
            // .data?
            console.log("User Get Res", response.data)
            setUser(response.data)
        })
        .catch(error => {
            console.log("User Get", error)
        })
    }, [])

    const deleteUser = id => {
        axiosWithAuth()
        .delete(`/users/user/${id}`)
        .then(response => {
            // .data?
            console.log("Delete Response", response)
           setUserDelete(true)
        })
        .then(()=>{
            setUserDelete(false)
        })
    }

    const editUser = userObj => {
        setEditingUser(userObj);
    }

    return (
        <div>
            <AddUser 
            setUser={setUser}
            editingUser={editingUser}
            />
            <h1>users</h1>
            {user.map(userObj => {
                return <div key={userObj.userid} >
                    <p>{userObj.username}</p>
                    <p>{userObj.userid}</p>
                    <p>{userObj.primaryemail}</p>
                    <button onClick={() => editUser(userObj)}>Edit</button>
                    <button onClick={() => deleteUser(userObj.userid.toString())}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default Users;