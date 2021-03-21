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

    const sem = [
        {
            value: 'I',
            label: 'I'
        },
        {
            value: 'II',
            label: 'II'
        },
        {
            value: 'III',
            label: 'III'
        },
        {
            value: 'IV',
            label: 'IV'
        },
        {
            value: 'V',
            label: 'V'
        },
        {
            value: 'VI',
            label: 'VI'
        },
        {
            value: 'VII',
            label: 'VII'
        },
        {
            value: 'VIII',
            label: 'VIII'
        },
    ]

    const type = [
        {
            value: 'Theory',
            label: 'Theory'
        },
        {
            value: 'Lab',
            label: 'Lab'
        }
    ]

    const dept = [
        {
            value: 'CSE',
            label: 'CSE'
        },
        {
            value: 'ECE',
            label: 'ECE'
        },
        {
            value: 'IT',
            label: 'IT'
        },
        {
            value: 'EEE',
            label: 'EEE'
        },
        {
            value: 'Civil',
            label: 'Civil'
        },
        {
            value: 'Mech',
            label: 'Mech'
        },
        {
            value: 'BME',
            label: 'BME'
        },
    ]
       
    function StaffEntry(props) {

        function ShortFormRendering() {
            if (props.ShortRen) {
                return (
                    <>
                        <FormControl style={{ width: '40%', marginLeft: '30px' }} variant="outlined">
                            <InputLabel htmlFor="standard-adornment-amount" >ShortForm</InputLabel>
                            <OutlinedInput labelWidth={100} />
                            <FormHelperText>Enter the Short Format</FormHelperText>
                        </FormControl>
                    </>
                )
            } else return null;
        }

        function ConditionalRendering() {
            if (props.CondRen) {
                return (
                    <TextField
                        style={{ marginLeft: '30px' }}
                        id="outlined-select-dept"
                        select
                        label={props.t3}
                        helperText={props.h3}
                        variant="outlined"
                    >
                        {props.source3.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                )
            } else return null;
        }

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
                    {props.source1.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <ConditionalRendering />
                <ShortFormRendering />
                <div style={{marginTop: '2%'}}></div>
                <TextField
                    id="outlined-select-position"
                    select
                    label={props.t2}
                    helperText={props.h2}
                    variant="outlined"
                >
                    {props.source2.map((option) => (
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
                <StaffEntry source1={annotation} source2={position}  t1="Prefix" t2='Position' CondRen={false} ShortRen={true} h1='Please select the annotation' h2='Please select the position' title='Add Staff'/>
            </div>
            <div className='consoleOptions'>
                <StaffEntry source1={sem} source2={type} source3={dept} t1="Semester" t2='Type' t3='Dept' CondRen={true} ShortRen={false} h1='Please select the semester' h2='Please select the type' h3='Please select the dept' title='Add Course'/>
            </div>
        </div>
    )
}