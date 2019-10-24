import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "./utils/axiosWithAuth";

const AddUser = props => {
    const [ newUser, setNewUser ] = useState({username: "", primaryemail: ""})

    const handleChange = event => {
        // console.log("New User", newUser)
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }


    useEffect(() => {
        if (props.editingUser){
            setNewUser({
                username: props.editingUser.username,
                primaryemail: props.editingUser.primaryemail
            });
            //if not editing user leave empty
        } else {
            setNewUser({username: "", primaryemail: ""})
        }//if props.editingUser changes, re render accordingly
    }, [props.editingUser])

    const onSubmit = event => {
        event.preventDefault()
        if(props.editingUser){
            axiosWithAuth()
            .put(`/users/user/${props.editingUser.userid}`, newUser)
            .then(response => {
                console.log("Put Res", response.data)
                props.setUser(response.data)
                setNewUser({
                    ...newUser,
                    username: "",
                    password: "",
                    email: ""
                });
            })
        } else {
            axiosWithAuth()
            .post("/users/user", newUser)
            .then(response => {
                console.log("Post Res", response.data)
                props.setUser(response)
                setNewUser({
                    ...newUser,
                    username: "",
                    password: "",
                    email: ""
                });
            })
            .catch(error => console.log("Post Error", error.response))
        }
    };

    return (
        
        
            <form onSubmit={onSubmit}>
                <div>
                <input 
                    type="text"
                    name="username"
                    value={newUser.name}
                    placeholder="User Name"
                    onChange={handleChange}
                />
                </div>
                <div>
                <input 
                    type="text"
                    name="password"
                    value={newUser.password}
                    placeholder="Password"
                    onChange={handleChange}
                />
                </div>
                <div>
                <input 
                    type="text"
                    name="primaryemail"
                    value={newUser.primaryemail}
                    placeholder="Email"
                    onChange={handleChange}
                />
                </div>
                <button onClick={handleChange}>{props.editingUser ? "Submit Edit" : "Add User"}</button>
            </form>
    )
}

export default AddUser;