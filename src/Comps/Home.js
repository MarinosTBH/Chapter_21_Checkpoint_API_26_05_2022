import React from "react";
import {Link} from "react-router-dom";

function Home (){
    return(
        <div className="Home">
            <Link to='/UserList'><button type="button">Click me</button></Link>
        </div>
    )
}
export default Home