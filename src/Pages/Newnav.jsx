import React from 'react'
import Dropdown from '../Dropdown'
import logo from './FMS 1.png'
import './pages.css'


const Newnav = () => {
    return (
        <div >
        <nav>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className='middle'>
                <a href="/Overview" className="btn">Overview</a>
                <a href="/TeamMember" className="btns active"><Dropdown/></a>
                <a href="/Finances" className="btn">Finances</a>
                <a href="/LeagueDetails" className="btn"> League Details</a>
            </div>
            <div className='rights'>
            <a href="/Account" className="btn">My Account</a>
            </div>
        </nav>
        </div>
    )
}

export default Newnav
