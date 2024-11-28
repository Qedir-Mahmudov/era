import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <ul>
                <li>  <Link to="/">Home</Link>
                </li>
                <li>  <Link to="/contact">Contact</Link>
                </li>
                <li>  <Link to="/addpage">Addpage</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
