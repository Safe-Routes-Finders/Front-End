import React,{useState,useEffect} from 'react'
import {axiosWithAuth} from "./utils/axiosWithAuth";
import {UserCard} from "../assets/style"

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
        <UserCard>
            <h1>Welcome {userInfo.username}</h1>
            <div>
            <h3>{userInfo.primaryemail}</h3>
            <button>Edit</button>
            </div>
        </UserCard>
    )
}
