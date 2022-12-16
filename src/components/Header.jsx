import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import SideBar  from "./SideBar"
import {GIT_URL} from "../config";

function Header() {
    const url = GIT_URL;
    const [isSidebar, setIsSideBar] = useState(false)
    const toggleSideBar = ()=>{
        setIsSideBar(!isSidebar)
    }
    return (
        <nav className="brown">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo logob">React Meals DB</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link  to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
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