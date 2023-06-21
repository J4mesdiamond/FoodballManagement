import React from 'react'
import img from './Soccer_ball_football_general_view 1.png'

const Header = () => {
    return (
        <>
            <header>
                <img src={img} alt="" />
                <div className="pos">
                    <h2>Welcome To FMS</h2>
                    <p>The No1. Football club Management System in the world</p>
                </div>
            </header>
        </>
    )
}

export default Header
