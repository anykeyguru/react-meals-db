import { Link } from 'react-router-dom';
import React from "react";
function SideBar(props) {
    const {toggleSideBar=Function.prototype} = props
    return (
        <div className="side-bar">
                <Link  to="/" onClick={toggleSideBar}>Home</Link>
                <Link to="/about"  onClick={toggleSideBar}>About</Link>
                <Link to="/contacts"  onClick={toggleSideBar}>Contacts</Link>
        </div>
    )
}

export default SideBar;