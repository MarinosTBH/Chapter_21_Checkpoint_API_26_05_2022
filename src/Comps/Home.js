import React from "react";
import {Link} from "react-router-dom";
import "../Home.css"

function Home (){
    return(
        <div className="Home">
              <Link to='/UserList'><div class="container">
                <span class="circle">
                  <i class="fa fa-arrow-down"><p style={{color:"black", fontSize:15, marginRight:30}}>Click me</p></i>
                </span>
                <span class="pulse"></span>
            </div></Link>
        </div>
    )
}
export default Home