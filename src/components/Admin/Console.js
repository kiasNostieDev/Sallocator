// add course
// add staff

import { Button, FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, OutlinedInput, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import './Console.css'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import firebase from 'firebase/app'
import fbref from '../../Firebase'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    form: {
        marginLeft: '30px',
        width: '40%',
        // eslint-disable-next-line no-useless-computed-key
        ['@media (max-width:400px)']: {
            marginLeft: 'unset',
            width: '60%',
            marginTop: "2%"
        }
    }
}));

export default function Console() {
    const classes = useStyles()
    const [isLoading, setIsLoading] = useState('1')
    const [courseList, setCourseList] = useState([])
    const [staffList, setStaffList] = useState([])
    let courseName, staffName, staffShortForm
    let prefixSelection, positionSelection, semesterSelection, typeSelection, deptSelection, degSelection
    
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
            label: 'Professor & Head',
            value: 'Prof. & Head'
        },
        {
            label: 'Professor',
            value: 'Prof.'
        },
        {
            label: 'Associate Professor',
            value: 'Asso. Prof.'
        },
        {
            label: 'Assistant Professor',
            value: 'Asst. Prof.'
        },
        {
            label: '',
            value: 'Custom'
        }
    ]

    const sem = [
        {
            value: 'Ist-Sem',
            label: 'I'
        },
        {
            value: 'IInd-Sem',
            label: 'II'
        },
        {
            value: 'IIIrd-Sem',
            label: 'III'
        },
        {
            value: 'IVth-Sem',
            label: 'IV'
        },
        {
            value: 'Vth-Sem',
            label: 'V'
        },
        {
            value: 'VIth-Sem',
            label: 'VI'
        },
        {
            value: 'VIIth-Sem',
            label: 'VII'
        },
        {
            value: 'VIIIth-Sem',
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

    const study = [
        {
            value: 'BE',
            label: 'BE'
        },
        {
            value: 'ME',
            label: 'ME'
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
        {
            value: 'ENG',
            label: 'ENG'
        },
        {
            value: 'MATHS',
            label: 'MATHS'
        },
        {
            value: 'PHY&CHE',
            label: 'PHY&CHE'
        },
        {
            value: 'CHE',
            label: 'CHE'
        },
        {
            value: 'PHY',
            label: 'PHY'
        },
        {
            value: 'MBA',
            label: 'MBA'
        },
    ]

    if (isLoading === '1') {
        var courseListInit = [], staffListInit = [], sli = [], cli = [], cli2 = []
        var sem1 = [], sem2 = [], sem3 = [], sem4 = [], leftovers = [], me1 = [], me2 = []
        firebase.database().ref('CourseList/').once('value', (snap) => {
            snap.forEach(csnap => {
                if(csnap.val().degree === 'ME')cli2.push(csnap.val())
                else cli.push(csnap.val())
            })
            for (var a = 0; a < cli.length; a++) {
                if (cli[a].semester === "Ist-Sem" || cli[a].semester === "IInd-Sem") sem1.push(cli[a])
                else if (cli[a].semester === "IIIrd-Sem" || cli[a].semester === "IVth-Sem") sem2.push(cli[a])
                else if(cli[a].semester === "Vth-Sem" || cli[a].semester === "VIth-Sem")sem3.push(cli[a])
                else if (cli[a].semester === "VIIth-Sem" || cli[a].semester === "VIIIth-Sem") sem4.push(cli[a])
                else courseListInit.push(cli[a].courseName)
            }
            for (a = 0; a < cli2.length; a++) {
                if (cli2[a].semester === "Ist-Sem" || cli2[a].semester === "IInd-Sem") me1.push(cli2[a])
                else if (cli2[a].semester === "IIIrd-Sem" || cli2[a].semester === "IVth-Sem") me2.push(cli2[a])
            }
            sem1.forEach(course=>{
                if (course.department === 'CSE') courseListInit.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            sem2.forEach(course=>{
                if (course.department === 'CSE') courseListInit.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            sem3.forEach(course=>{
                if (course.department === 'CSE') courseListInit.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            sem4.forEach(course=>{
                if (course.department === 'CSE') courseListInit.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            leftovers.forEach(course => courseListInit.push(course))
            me1.forEach(course=>courseListInit.push(course.courseName))
            me2.forEach(course=>courseListInit.push(course.courseName))
            setCourseList(courseListInit)
        })

        firebase.database().ref('StaffList/').once('value', (snap) => {
            snap.forEach(csnap => {
                var key = csnap.key
                sli.push([key, csnap.val()])
            })
            for(var a = 0; a < sli.length; a++){
                for (var b = 0; b < sli.length; b++){
                    if (sli[a][1].rank < sli[b][1].rank) {
                        var temp = sli[a]
                        sli[a] = sli[b]
                        sli[b] = temp
                    }
                }
            }
            sli.map(stuff=>staffListInit.push(stuff[0]))
            setStaffList(staffListInit)
        })

        setIsLoading('0')
    }

    function ConsoleList(props) {

        function ListEntity() {
            if (props.heading === 'Staff List') {
                return (
                    staffList.map(name=>{
                        return (
                            <div className='consoleListItem'>
                                <div className='cliName'>{name}</div>
                                <Button
                                    onClick={() => {
                                        firebase.database().ref('StaffList/').child(name).remove()
                                        firebase.database().ref('StaffList/').on('value', snap => {
                                            let staffListUpdated = []
                                            snap.forEach(item => {
                                                staffListUpdated.push(item.key)
                                            })
                                            setStaffList(staffListUpdated)
                                        })
                                    }}
                                    size="medium"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete
                                </Button>
                            </div>
                        )
                    })
                )
            }
            return (
                courseList.map(name=>{
                    return (
                        <div className='consoleListItem'>
                            <div className='cliName'>{name}</div>
                            <Button
                                onClick={() => {
                                    firebase.database().ref('CourseList/').child(name).remove()
                                    firebase.database().ref('CourseList/').on('value', snap => {
                                        let courseListUpdated = [], cli=[],sem1=[],sem2=[],sem3=[],sem4=[]
                                        snap.forEach(item => {
                                            cli.push(item.val())
                                        })
                                        for (var a = 0; a < cli.length; a++) {
                                            if (cli[a].semester === "Ist-Sem" || cli[a].semester === "IInd-Sem") sem1.push(cli[a])
                                            else if (cli[a].semester === "IIIrd-Sem" || cli[a].semester === "IVth-Sem") sem2.push(cli[a])
                                            else if(cli[a].semester === "Vth-Sem" || cli[a].semester === "VIth-Sem")sem3.push(cli[a])
                                            else if (cli[a].semester === "VIIth-Sem" || cli[a].semester === "VIIIth-Sem") sem4.push(cli[a])
                                            else courseListInit.push(cli[a].courseName)
                                        }
                                        sem1.forEach(course=>courseListUpdated.push(course.courseName))
                                        sem2.forEach(course=>courseListUpdated.push(course.courseName))
                                        sem3.forEach(course=>courseListUpdated.push(course.courseName))
                                        sem4.forEach(course=>courseListUpdated.push(course.courseName))
                                        setCourseList(courseListUpdated)
                                    })
                                }}
                                size="medium"
                                className={classes.button}
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                            </Button>
                        </div>
                    )
                })
            )
        }

        return (
            <>
                <Typography style={{ fontFamily: 'Mulish', textAlign: 'center' }} variant='h4'>{props.heading}</Typography>
                <ListEntity />
                <Button
                    onClick={() => {
                        if (props.heading === 'Staff List') {
                            if (window.confirm("Are you sure wanna wipe out all the data?"))
                                firebase.database().ref('StaffList/').remove()
                                setStaffList([])
                        } else {
                            if (window.confirm("Are you sure wanna wipe out all the courses?")) {
                                firebase.database().ref('CourseList/').remove()
                                setCourseList([])
                            }
                        }}
                    }
                    fullWidth
                    style={{color:'red'}}
                    size="medium"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Flush whole Staff List
                </Button>
            </>
        )
    }
       
    function StaffEntry(props) {

        function ShortFormRendering() {
            if (props.ShortRen) {
                return (
                    <>
                        <FormControl className={classes.form} variant="outlined">
                            <InputLabel htmlFor="standard-adornment-amount" >ShortForm</InputLabel>
                            <OutlinedInput labelWidth={100} onChange={(e) => staffShortForm= e.target.value}/>
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
                        className={classes.form}
                        id="outlined-select-dept"
                        select
                        label={props.t3}
                        helperText={props.h3}
                        variant="outlined"
                        onChange={e=>deptSelection = e.target.value}
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

        function StudyRender() {
            if (props.CondRen) {
                return (
                    <TextField
                        id="outlined-select-position"
                        select
                        className={classes.form}
                        label={props.t4}
                        helperText={props.h4}
                        variant="outlined"
                        onChange={e=>degSelection = e.target.value}
                    >
                        {props.source4.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                )
            } else return null
        }

        function handleChangeTXT1(e) {
            // let prefixSelection, positionSelection, semesterSelection, typeSelection
            if (props.title === 'Add Staff') {
                prefixSelection = e.target.value
            } else if (props.title === 'Add Course') {
                semesterSelection = e.target.value
            }
        }
        
        function handleChangeTXT2(e) {
            // let prefixSelection, positionSelection, semesterSelection, typeSelection
            if (props.title === 'Add Staff') {
                positionSelection = e.target.value
            } else if (props.title === 'Add Course') {
                typeSelection = e.target.value
            }
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
                    onChange={handleChangeTXT1}
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
                    onChange={handleChangeTXT2}
                >
                    {props.source2.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <StudyRender />
                <div style={{marginTop: '2%'}}></div>
                <FormControl style={{width: '90%'}} variant="outlined">
                    <InputLabel htmlFor="standard-adornment-amount" >Name</InputLabel>
                    <OutlinedInput labelWidth={100} onChange={(e)=>{
                        if (props.title === 'Add Staff') staffName = e.target.value
                        else courseName = e.target.value
                    }} />
                    <FormHelperText>Enter the Name and custom annotations if needed</FormHelperText>
                </FormControl>
                <div style={{marginTop: '5%'}}></div>
                <Button
                    onClick={() => {
                        if (props.title === 'Add Staff') {
                            const finalName = prefixSelection + ' ' + staffName + ' ' + positionSelection
                            const staffData = {
                                fullName: finalName,
                                shortName: staffShortForm,
                                prefix: prefixSelection,
                                position: positionSelection,
                                rank: staffList.length
                            }
                            console.log(finalName, staffShortForm)
                            const staffRef = firebase.database().ref()
                            staffRef.child('StaffList/'+finalName.split('.').join("")).set(staffData)
                            firebase.database().ref('StaffList/').on('value', snap => {
                                let staffListUpdated = []
                                snap.forEach(item => {
                                    staffListUpdated.push(item.key)
                                })
                                setStaffList(staffListUpdated)
                            })
                        } else if (props.title === 'Add Course') {
                            const finalCourse = degSelection + '-' + deptSelection + '-' + semesterSelection + '-' + courseName + '-' + typeSelection
                            const courseData = {
                                courseName: finalCourse,
                                semester: semesterSelection,
                                department: deptSelection,
                                type: typeSelection,
                                degree: degSelection
                            }                            
                            console.log(finalCourse)
                            const courseRef = firebase.database().ref()
                            courseRef.child('CourseList/' + finalCourse.split('.').join(" ")).set(courseData)
                            firebase.database().ref('CourseList/').on('value', snap=>{
                                let courseListUpdated = []
                                snap.forEach(item => {
                                    courseListUpdated.push(item.key)
                                })
                                setCourseList(courseListUpdated)
                            })
                        }
                    }}
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

    function NumberBanner() {
        return (
            <div className='Databanner'>
                <div className='Staffcount'>
                    <div className='labelName'>StaffCount:</div>
                    <div className='Numberbanner'>{staffList.length}</div>
                </div>
                <div className='Coursecount'>
                    <div className='labelName'>CourseCount:</div>
                    <div className='Numberbanner'>{courseList.length}</div>
                </div>
            </div>
        )
    }

    function WaitForDataRender() {
        if(isLoading === '1'){
            return (
                <div>loading</div>
            )
        } else if (isLoading === '0') {
            return (
                <div className='adminConsole'>
                    <NumberBanner />
                    <div className='consoleListName'>
                        <ConsoleList heading='Staff List'/>
                    </div>
                    <div className='consoleListSubject'>
                        <ConsoleList heading='Course List'/>
                    </div>
                    <div className='consoleOptions'>
                        <StaffEntry source1={annotation} source2={position}  t1="Prefix" t2='Position' CondRen={false} ShortRen={true} h1='Please select the annotation' h2='Please select the position' title='Add Staff'/>
                    </div>
                    <div className='consoleOptions'>
                        <StaffEntry source1={sem} source2={type} source3={dept} source4={study} t1="Semester" t2='Type' t3='Dept' t4='Degree' CondRen={true} ShortRen={false} h1='Please select the semester' h2='Please select the type' h3='Please select the dept' h4='Please select the degree' title='Add Course'/>
                    </div>
                </div>
            )
        }
    }

    return (
        <WaitForDataRender />
    )
}