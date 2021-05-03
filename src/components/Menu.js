import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className='MenuHome'>
            <div className='MenuItem'>
                <Link to='/admin' style={{textDecoration: 'none'}}><div className='ItemName'>Admin</div></Link>
            </div>

            <div className='MenuItem'>
                <Link to='/subtable' style={{textDecoration: 'none'}}><div className='ItemName'>Subject Based Table</div></Link>
            </div>

            <div className='MenuItem'>
                <Link to='/nametable' style={{textDecoration: 'none'}}><div className='ItemName'>Staff Based Table</div></Link>
            </div>
        </div>
    )
}
