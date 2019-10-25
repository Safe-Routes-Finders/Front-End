import React,{useState,useEffect} from 'react'
import {axiosWithAuth} from "./utils/axiosWithAuth";
import {UserCard} from "../assets/style"
import styled from "styled-components";


const StyledUser = styled.div`
background-color: #5BD59B;
padding:1vh;
`;

export default function UserInfo(props) {

    const [userInfo,setUserInfo] = useState({})




    useEffect(()=>{
        axiosWithAuth()
        .get("/users/getuserinfo")
        .then(response=>{
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
            </div>
        </UserCard>
        </StyledUser>
    )
}
