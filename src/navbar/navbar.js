import React from "react";
import "./navbar.css"
import { useNavigate } from "react-router-dom";
const Navbar=()=>{

    const navi=useNavigate()
    return(
        <di className="navbar_container">
            <p onClick={(e)=>{navi("/");console.log("home page")}}>Upload</p>
            <p onClick={()=>{navi("/list")}}>Listing</p>

        </di>
    )
}

export default Navbar