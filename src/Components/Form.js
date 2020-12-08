import React from 'react'
import { useState } from "react";
import {FormControl, makeStyles, Typography, Box, Button} from '@material-ui/core'
import {TextField, MenuItem} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { fbref } from '../App'

const useStyles = makeStyles(theme=>({
    formDiv:{
        margin: "10px",
    },
    formItems:{
        paddingTop: "10px",
        paddingBottom: "10px",
    },
}))

var finalData = {
    "Name":"",
    "1st_Preference":"",
    "2nd_Preference":"",
    "3rd_Preference":"",
    "4th_Preference":"",
    "1st_lab_Preference":"",
    "2nd_lab_Preference":""
}

const subs = [
    {
    'value': 'II CSE-CS8251-Programming in C',
    'label': 'II CSE-CS8251-Programming in C'
    },{
    'value': 'IV CSE-CS8491-Computer Architecture',
    'label': 'IV CSE-CS8491-Computer Architecture'
    },{
    'value': 'IV CSE-CS8492-Database Management Systems',
    'label': 'IV CSE-CS8492-Database Management Systems'
    },{
    'value': 'IV CSE-CS8451-Design and Analysis of Algorithms',
    'label': 'IV CSE-CS8451-Design and Analysis of Algorithms'
    },{
    'value': 'IV CSE-CS8493-Operating Systems',
    'label': 'IV CSE-CS8493-Operating Systems'
    },{
    'value': 'IV CSE-CS8494-Software Engineering',
    'label': 'IV CSE-CS8494-Software Engineering'
    },{
    'value': 'VI  CSE-CS8651-Internet Programming',
    'label': 'VI  CSE-CS8651-Internet Programming'
    },{
    'value': 'VI  CSE-CS8691-Artificial Intelligence',
    'label': 'VI  CSE-CS8691-Artificial Intelligence'
    },{
    'value': 'VI  CSE-CS8601-Mobile Computing',
    'label': 'VI  CSE-CS8601-Mobile Computing'
    },{
    'value': 'VI  CSE-CS8602-Compiler Design',
    'label': 'VI  CSE-CS8602-Compiler Design'
    },{
    'value': 'VI  CSE-CS8603-Distributed Systems',
    'label': 'VI  CSE-CS8603-Distributed Systems'
    },{
    'value': 'VIII CSE-CS8080-Information Retrieval Techniques',
    'label': 'VIII CSE-CS8080-Information Retrieval Techniques'
    },{
    'value': 'VI CSE-CS8075-Data warehousing and Data mining',
    'label': 'VI CSE-CS8075-Data warehousing and Data mining'
    },{
    'value': 'IV BME-Fundamentals of Data Structures and Algorithms',
    'label': 'IV BME-Fundamentals of Data Structures and Algorithms'
    },{
    'value': 'II ME CSE-CP5201-Network Design and Technologies',
    'label': 'II ME CSE-CP5201-Network Design and Technologies'
    },{
    'value': 'II ME CSE-CP5291-Security Practices',
    'label': 'II ME CSE-CP5291-Security Practices'
    },{
    'value': 'II ME CSE-CP5292-Internet of Things',
    'label': 'II ME CSE-CP5292-Internet of Things'
    },{
    'value': 'II ME CSE-CP5293-Big Data Analytics',
    'label': 'II ME CSE-CP5293-Big Data Analytics'
    },{
    'value': 'II ME CSE-CP5094-Information Retrieval Techniques',
    'label': 'II ME CSE-CP5094-Information Retrieval Techniques'
    }
]

const labs = [
    {
    'value': 'II CSE-CS8261-C Programming Laboratory',
    'label': 'II CSE-CS8261-C Programming Laboratory'
    },{
    'value': 'IV CSE-CS8481-Database Management Systems Laboratory',
    'label': 'IV CSE-CS8481-Database Management Systems Laboratory'
    },{
    'value': 'IV CSE-CS8461-Operating Systems Laboratory',
    'label': 'IV CSE-CS8461-Operating Systems Laboratory'
    },{
    'value': 'VI  CSE-CS8661-Internet Programming Laboratory',
    'label': 'VI  CSE-CS8661-Internet Programming Laboratory'
    },{
    'value': 'VI  CSE-CS8662-Mobile Application Development Laboratory',
    'label': 'VI  CSE-CS8662-Mobile Application Development Laboratory'
    },{
    'value': 'VI  CSE-CS8611-Mini Project',
    'label': 'VI  CSE-CS8611-Mini Project'
    },{
        'value':'VIII Project',
        'label':'VIII Project'
    }
]

export default function Form(props) {
    const classes = useStyles();

    function Selector(props){
        const [choice,setChoice] = useState('')

        function handleChange(e){      
            setChoice(e.target.value)
            var ref = props.label
            subs.indexOf(e.target.value)
            finalData[ref] = e.target.value
            console.log(finalData)
        }

        return (
            <FormControl fullWidth className={classes.formItems}>
                <TextField select label="Select" value={choice} onChange={handleChange} helperText={props.label}> 
                    {props.values.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </FormControl>
        )

    };
    
    function handleSubmit(){
        finalData.Name = props.name
        var ref = fbref.database().ref("PrefData/"+props.name.split('.').join(""))
        console.log('here',ref)

        ref.update(finalData).then(e=>console.log(e))
        window.alert("Uploaded Your Choices")
        window.location.reload()
        return <Redirect to="/Review"/>
    }

    function handleClear(){
      window.location.reload()
    }

    return (
        <div className={classes.formDiv}>
            <Box borderColor="primary.main"  style={{padding:"7px"}} borderRadius="borderRadius" border={1}>
                <Typography variant="h4" style={{paddingBottom: "5px"}} >SubjectPreferences</Typography>
                <Selector label={"1st_Preference"} values={subs}/>
                <Selector label={"2nd_Preference"} values={subs}/>
                <Selector label={"3rd_Preference"} values={subs}/>
                <Selector label={"4th_Preference"} values={subs}/>
            </Box>
            <Box borderColor="primary.main"  style={{padding:"7px"}} borderRadius="borderRadius" border={1}>
                <Typography variant="h4" style={{paddingBottom: "5px"}}>LabPreferences</Typography>
                <Selector label={"1st_lab_Preference"} values={labs}/>
                <Selector label={"2nd_lab_Preference"} values={labs}/>
            </Box>
            <div style={{padding:"9px"}}></div>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Button onClick={handleClear}>Clear</Button>       
                <Button onClick={handleSubmit} style={{justifyItems: "end", backgroundColor: "#b30000", color:"#fff"}}>Enter</Button>
            </div>
        </div>
    )
}
