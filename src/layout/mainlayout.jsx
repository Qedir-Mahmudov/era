import React from 'react'
import Navbar from './navbar'
import { Outlet, Link } from "react-router-dom";
import Footer from './footer';

function Mainlayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>

    )
}

export default Mainlayout