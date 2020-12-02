import React from 'react'
import firebase from 'firebase'
import logo from "../icons/logo.png";
import {FormControl, makeStyles, OutlinedInput, InputLabel, Button} from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

var history = createHistory()
const useStyles = makeStyles(theme=>({
    formDiv:{
        margin: "10px",
    },
    margin: {
        margin: theme.spacing(1),
    },
    formItems:{
        paddingTop: "10px",
        paddingBottom: "10px",
    },
}))
//psnacsedept@gmail.com THe392335@@

export default function Auth() {
    var classes = useStyles()

    var i1,i2
    var link = '/Admin'

    function handleClick(props){
        firebase.auth().signInWithEmailAndPassword(i1,i2).then(()=>{
            console.log('gremory')
            link = '/FormTable'
            history.push('/FormTable')  
            window.location.reload()
        }).catch(err=>{
            alert("auth failed it seems")
        })
    }


    return (
        <div>
            <div display="flex" style={{padding: "10px"}}>
                <img alt='logopsna' src={logo}/>
            </div>
           <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="standard-adornment-amount" >Email</InputLabel>
              <OutlinedInput labelWidth={60} onChange={(e)=>i1=e.target.value.trim()}/>
            </FormControl>
            <div style={{margin:"10px"}}></div>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="standard-adornment-amount" >Password</InputLabel>
              <OutlinedInput type="password" onChange={(e)=>i2=e.target.value} labelWidth={100}/>
            </FormControl>
            <div style={{display:"flex",marginTop:"10px",justifyContent:"flex-end"}}>
                <Button id="btn" variant="outlined" onClick={handleClick} style={{justifyContent:"flex-end"}}>Okay</Button>
            </div>
        </div>
    )
}
