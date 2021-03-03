import React from 'react'

export default function navbar() {
    var navHead = 'Subject Allocation'

    const setNavHead = (gotNavHead)=>{
        navHead = gotNavHead
    }

    return (
        <div class='navTop'>
            <div class='navLogo'></div>
            <div class='navName'>Subject Allocation</div>
            <div class='navAdmin'></div>
        </div>
    )
}
