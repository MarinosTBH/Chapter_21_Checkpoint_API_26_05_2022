import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "../App.css"

const UserList = () => {
    const avatarMale = "https://www.bootdey.com/img/Content/avatar/avatar7.png";
    const avatarFemale = "https://www.bootdey.com/img/Content/avatar/avatar3.png";
    

    const [users, setUsers] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get('https://jsonplaceholder.typicode.com/users')
          setUsers(res.data)
        } catch (error) {
          console.log(error)
        }
  
      }
      fetchData()
    }, [])
  return (
    <div className="task-box">
        <ul >{users.map(user=> 
            
              <div className="todo-row" key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <div className="icon-box">
                <Link to={`/UserList/User/${user.id}`} >
                  <img className="avatar" src={user.id%2===0? avatarMale:avatarFemale} alt={`${user.name} avatar`}/>
                </Link>
                </div>
              </div>
            
        
        )}
        </ul>
    </div>
  )
}

export default UserList