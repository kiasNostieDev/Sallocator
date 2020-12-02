import React from 'react'
import { Typography, makeStyles, AppBar, Toolbar } from '@material-ui/core'
import logo from "../icons/logo.png";
import Form from './Form';

const useStyles = makeStyles(theme=>({
    heading: {
        padding: "30px",
    },
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginTop: "16px",
    },
}))

export default function GiveData(props) {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="sticky" style={{background:"#002e63"}}> 
                <Toolbar>
                    <img src={logo} alt='logoclg' style={{paddingRight:"10px",width:"50px",height:"50px"}}></img>
                    <Typography variant="h5" className={classes.title}>{props.match.params.slug}</Typography>
                </Toolbar>
                <Typography style={{alignSelf:"flex-end",textAlign:"flex-end",color:"#fff",marginRight:"10px"}} variant="subtitle1">Powered by H45H</Typography>
            </AppBar>
            <Typography variant="h5" className={classes.heading}>Select your Preferences!</Typography>
            <Form name={props.match.params.slug}/>
        </div>
    )
}
