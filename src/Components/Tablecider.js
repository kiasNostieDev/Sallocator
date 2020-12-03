import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Tablecider() {

    function Btns(){
        return(
            <div style={{
                margin: 'auto',
                width: '24%',
                padding: '10px',
                float: 'center',
            }}>
                <Link to='FormTable' style={{
                    margin:"10px",
                    backgroundColor:"#0ff",
                    padding: '10px',
                    borderRadius: '5px',
                    marginLeft: '10px',
                    marginTop: '10px'
                    }}><Button>Staff Based</Button></Link>
                <Link to='/CourseTable' style={{
                    margin:"10px",
                    backgroundColor:"#0ff",
                    padding: '10px',
                    borderRadius: '5px',
                    marginLeft: '10px',
                    marginTop: '10px'
                    }}><Button>Subject Based</Button></Link>
            </div>
        )
    }

    return (
        <div>
            <div style={{
                width: '100%',
                paddingTop: '16%',
                textAlign: 'center',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase'
            }}>Choose the type of Table</div>
            <Btns/>
        </div>
    )
}
