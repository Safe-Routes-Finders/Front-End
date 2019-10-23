import React,{useState,useEffect} from 'react'
import {axiosWithAuth} from "./utils/axiosWithAuth";
import {UserCard} from "../assets/style"
import styled from "styled-components";

const StyledUser = styled.div`
background-color: #5BD59B;
`;

export default function UserInfo() {

    const [userInfo,setUserInfo] = useState({})
    useEffect(()=>{
        axiosWithAuth()
        .get("/users/getuserinfo")
        .then(response=>{
            console.log(response.data)
            setUserInfo(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    return (
        <StyledUser>
        <UserCard>
            <h1>Welcome {userInfo.username}</h1>
            <div>
            <h3>{userInfo.primaryemail}</h3>
            <button>Edit</button>
            </div>
        </UserCard>
        </StyledUser>
    )
}
