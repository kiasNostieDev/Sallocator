import React from 'react'
import firebase from 'firebase'
import logo from "../icons/logo.png";
import {FormControl, OutlinedInput, InputLabel, Button} from '@material-ui/core'
import createHistory from 'history/createBrowserHistory'

var history = createHistory()
//psnacsedept@gmail.com THe392335@@

export default function Auth() {

    var i1,i2

    function handleClick(props){
        firebase.auth().signInWithEmailAndPassword(i1,i2).then(()=>{
            console.log('gremory')
            history.push('/Tabledecider')  
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
