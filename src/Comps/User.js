import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Link} from "react-router-dom"

function User(){
    const avatarMale = "https://www.bootdey.com/img/Content/avatar/avatar7.png";
    const avatarFemale = "https://www.bootdey.com/img/Content/avatar/avatar3.png";

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
    <div className="user-routed-box">
        <div><Link to="/UserList"><button style={{color:"black",fontWeight:800}}>Go back</button></Link></div>
        <img className="avatarr" src={user.id%2===0? avatarMale:avatarFemale} alt={`${user.name} avatar`}/>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
    </div>)
}
export default User