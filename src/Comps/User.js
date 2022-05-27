import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function User(){

    const[user,setUser]=useState({});
    const {id}=useParams();
    console.log(id)

    useEffect( ()=>{
        const fetch = async()=> {
            try{
                const res=  await  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
                }
                fetch()
                }
                ,[])
    return(
    <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.email}</p>
    </div>)
}
export default User