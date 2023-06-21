import React from 'react'
import './styles.css'
import logo from './FMS 1.png'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
        <nav>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="right">
                <a href="/login" className="btn" 
                style={{padding: "10px 20px", background:"#EEEEEE", textDecoration:"none", color: "black"}}
                >Login</a>
                <a href="/sign-up" className="btn" 
                style={{padding: "10px 20px", background:"#EEEEEE", textDecoration:"none", color: "black"}}
                >Sign Up</a>
            </div>
        </nav>
        </div>
    )
}

export default Nav
