import React from 'react'
import './navbar.css'

export default function Navbar() {
    var navHead = 'Subject Allocation'

    const setNavHead = (gotNavHead)=>{
        navHead = gotNavHead
    }

    return (
        <div class='navTop'>
            <div class='navLogo'></div>
            <div class='navName'>Subject Allocation</div>
            <div class='navAdmin'>
                <button class='navButton'>Admin</button>
            </div>
        </div>
    )
}
