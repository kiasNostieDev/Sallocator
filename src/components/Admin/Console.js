// add course
// add staff

import { Button, FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, OutlinedInput, TextField, Typography } from '@material-ui/core'
import React from 'react'
import './Console.css'
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}));

export default function Console() {
    const classes = useStyles();
    
    const annotation = [
        {
          value: 'Mr.',
          label: 'Mr.',
        },
        {
          value: 'Dr.',
          label: 'Dr.',
        },
        {
          value: 'Mrs.',
          label: 'Mrs.',
        },
        {
          value: 'Ms.',
          label: 'Ms.',
        },
        {
            value: '',
            label: 'Custom'
        }
    ];

    const position = [
        {
            value: 'Professor & Head',
            label: 'Prof. & Head'
        },
        {
            value: 'Professor',
            label: 'Prof.'
        },
        {
            value: 'Associate Professor',
            label: 'Asso. Prof.'
        },
        {
            value: 'Assistant Professor',
            label: 'Asst. Prof.'
        },
        {
            value: '',
            label: 'Custom'
        }
    ]
    
    function StaffEntry(props) {
        return (
            <>
                <Typography style={{fontFamily: 'Mulish', textAlign: 'center'}} variant='h5'>{props.title}</Typography>
                <div style={{marginTop: '4%'}}></div> 
                <TextField
                    id="outlined-select-annotation"
                    select
                    label={props.t1}
                    helperText={props.h1}
                    variant="outlined"
                >
                    {annotation.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{marginTop: '2%'}}></div> 
                <TextField
                    id="outlined-select-position"
                    select
                    label={props.t2}
                    helperText={props.h2}
                    variant="outlined"
                >
                    {position.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{marginTop: '2%'}}></div>
                <FormControl style={{width: '90%'}} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-amount" >Name</InputLabel>
                    <OutlinedInput labelWidth={100} />
                    <FormHelperText>Enter the Name and custom annotations if needed</FormHelperText>
                </FormControl>
                <div style={{marginTop: '5%'}}></div>
                <Button
                    variant="contained"
                    size="medium"
                    startIcon={<SaveIcon />}
                    style={{marginLeft: '70%', backgroundColor: '#E6AF2E'}}
                >
                    Save
                </Button>
                <div style={{marginTop: '3%'}}></div>
            </>
        )
    }

    return (
        <div className='adminConsole'>
            <div className='consoleOptions'>
                <StaffEntry t1="Prefix" t2='Position' h1='Please select the annotation' h2='Please select the position' title='Add Staff'/>
            </div>
            <div className='consoleOptions'>
                <StaffEntry t1="Year and Semester" t2='Type' h1='Please select the year and semester' h2='Please select the type' title='Add Course'/>
            </div>
        </div>
    )
}