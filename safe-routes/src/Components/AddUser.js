import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "./utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddUser = props => {

    const [ newUser, setNewUser ] = useState({username: "", primaryemail: ""})
    
    const handleChange = event => {
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
            axiosWithAuth()
            .put(`/users/user/${props.editingUser.userid}`, newUser)
            .then(response => {
                console.log("Put Res", response)
                setNewUser({
                    ...newUser,
                    username: "",
                    password: "",
                    primaryemail: ""
                })
                props.setEditingUser(null)
            },[])
    };

    return (
        <div style={{padding: "1rem"}}>
            <h1 style={{textAlign: "center", fontSize: "3rem", textTransform: "uppercase"}}>Users</h1>
            <Form onSubmit={onSubmit} style={{width:"20%",margin: "auto", display: "flex", flexDirection: "column" , alignItems:"center"}}>
            
                <Input
                    style={{margin: "0.5rem"}} 
                    type="text"
                    name="username"
                    value={newUser.username}
                    placeholder="User Name"
                    onChange={handleChange}
                />
                <Input 
                    style={{margin: "0.5rem"}} 
                    type="text"
                    name="primaryemail"
                    value={newUser.primaryemail}
                    placeholder="Email"
                    onChange={handleChange}
                />
              <Button style={{padding: "0.3rem 4rem", fontSize: "2rem", margin: "1.2rem"}} onClick={onSubmit}>{props.editingUser ? "Submit Edit" : "Edit User"}</Button>
            </Form>
        </div>
    )
}

export default AddUser;