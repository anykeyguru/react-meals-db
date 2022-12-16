import {Link, NavLink} from 'react-router-dom';
import React from "react";

function SideBar(props) {
    const {toggleSideBar = Function.prototype} = props
    return (
        <div className="side-bar">
                <Link to="/" onClick={toggleSideBar} className="s-nav">Home</Link>
                <NavLink to="/about" onClick={toggleSideBar} className="s-nav">About</NavLink>
                <NavLink to="/contacts" onClick={toggleSideBar} className="s-nav">Contacts</NavLink>
        </div>
    )
}

export default SideBar;