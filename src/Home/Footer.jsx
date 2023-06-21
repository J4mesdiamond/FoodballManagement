import React from 'react'
import './styles.css'
import logo from './FMS 1.png'

const Footer = () => {
    return (
        <>
            <footer>
            <div className="logo"><img src={logo} alt="" /></div>
                <div className="right">
                    <h4>copyright 2023</h4>
                </div>
            </footer>
        </>
    )
}

export default Footer
