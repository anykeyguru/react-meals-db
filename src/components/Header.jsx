import React, {useState} from "react";
import {Link} from "react-router-dom";
import SideBar  from "./SideBar"
import {GIT_URL} from "../config";

function Header() {
    const url = GIT_URL;
    const [isSidebar, setIsSideBar] = useState(false)
    const toggleSideBar = ()=>{
        setIsSideBar(!isSidebar)
    }
    return (
        <nav className="indigo darken-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React Meals DB</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link  to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><a href={url} target="_blank" rel="noreferrer">Git</a></li>
                </ul>
                <i className="material-icons show-on-medium-and-down menu" onClick={toggleSideBar} style={{
                    cursor: "pointer"
                }}>apps</i>
                {isSidebar && <SideBar toggleSideBar={toggleSideBar}/>}
            </div>
        </nav>

    )
}


export {Header}