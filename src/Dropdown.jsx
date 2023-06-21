import React, { useState } from 'react'
import './dropdown.css'

const Dropdown = () => {
    const [state, setstate] = useState(false);
    const showDropdown = () =>{
        setstate(true);
    }
    const hideDropdown = () =>{
        setstate(false);
    }
    return (
        <div className='dropdown' style={{zIndex:"1000"}}>
            <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <a href="/TeamMember" style={{textDecoration:"none", color:"#008000"}}>Team Members</a>   <i class="bi bi-chevron-down"></i>
                {state ?( <ul className='menu' onMouseEnter={showDropdown}>
                    <li><a href="/Players">Players</a></li>
                    <li><a href="/Staff">Staff</a></li>
                </ul>
                ):
                null}
            </div>
        </div>
    )
}

export default Dropdown
