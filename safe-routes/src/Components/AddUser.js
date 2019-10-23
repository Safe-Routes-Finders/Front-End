import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "./utils/axiosWithAuth";

const AddUser = props => {
    const [ newUser, setNewUser ] = useState({username: "", password: "", email: ""})

    const handleChange = event => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }


    useEffect(() => {
        if (props.editingUser){
            setNewUser({
                name: props.editingUser.username,
                password: props.editingUser.password,
                email: props.editingUser.email
            });
            //if not editing user leave empty
        } else {
            setNewUser({username: "", password: "", email: ""})
        }//if props.editingUser changes, re render accordingly
    }, [props.editingUser])

    const onSubmit = event => {
        event.preventDefault()
        if(props.editingUser){
            axiosWithAuth()
            .put(`/users/user/${props.editingUser.id}`, newUser)
            .then(response => {
                console.log("Put Res", response.data)
                props.setUser(response)
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
                    name="email"
                    value={newUser.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                </div>
                <button onClick={handleChange}>{props.editingUser ? "Submit Edit" : "Add User"}</button>
            </form>
    )
}

export default AddUser;