import React, { useState } from 'react'
import './AddData.css'
import firebase from 'firebase/app'
import fbref from '../Firebase'
import SaveIcon from '@material-ui/icons/Save'
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { Button, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    }
}));

export default function AddData(props) {
    let slug = props.match.params.slug
    const classes = useStyles()
    const [isLoading, setIsLoading] = useState('1')
    const [theoryList, setTheoryList] = useState([])
    const [labList, setLabList] = useState([])
    const [short, setShort] =useState()
    const [tChoice, setTC] = useState({
        theory1: '',
        theory2: '',
        theory3: '',
        theory4: '',
        lab1: '',
        lab2: '',
    })
    let t1,t2,t3,t4,l1,l2

    if (isLoading === '1') {
        var courseListTheory = [], courseListLab = [], shortForm = "", clia = [], clib = [], sem1 = [], sem2 = [], sem3 = [], sem4 = []
        var sem1l = [], sem2l = [], sem3l = [], sem4l = [], leftovers = [], cli2=[], me1 = [], me2 = []
        firebase.database().ref('CourseList/').once('value', (snap) => {
            snap.forEach(csnap => {
                if(csnap.val().type === 'Lab')clib.push(csnap.val())
                else clia.push(csnap.val())
            })

            for (var a = 0; a < clia.length; a++) {
                if (clia[a].semester === "Ist-Sem" || clia[a].semester === "IInd-Sem") {
                    if(clia[a].degree === "ME")me1.push(clia[a])
                    else sem1.push(clia[a])
                }
                else if (clia[a].semester === "IIIrd-Sem" || clia[a].semester === "IVth-Sem") {
                    if(clia[a].degree === "ME")me2.push(clia[a])
                    else sem2.push(clia[a])
                }
                else if(clia[a].semester === "Vth-Sem" || clia[a].semester === "VIth-Sem")sem3.push(clia[a])
                else if (clia[a].semester === "VIIth-Sem" || clia[a].semester === "VIIIth-Sem") sem4.push(clia[a])
                else courseListTheory.push(clia[a].courseName)
            }
            sem1.forEach(course => {
                if (course.department === 'CSE') courseListTheory.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            sem2.forEach(course=>{
                if (course.department === 'CSE') courseListTheory.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            sem3.forEach(course=>{
                if (course.department === 'CSE') courseListTheory.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            sem4.forEach(course => {
                if (course.department === 'CSE') courseListTheory.push(course.courseName)
                else leftovers.push(course.courseName)
            })
            leftovers.forEach(course=>courseListTheory.push(course))
            me1.forEach(course=>courseListTheory.push(course.courseName))
            me2.forEach(course=>courseListTheory.push(course.courseName))
            courseListTheory.forEach(i=>console.log(i))
            for (a = 0; a < clib.length; a++) {
                if (clib[a].semester === "Ist-Sem" || clib[a].semester === "IInd-Sem") sem1l.push(clib[a])
                else if (clib[a].semester === "IIIrd-Sem" || clib[a].semester === "IVth-Sem") sem2l.push(clib[a])
                else if(clib[a].semester === "Vth-Sem" || clib[a].semester === "VIth-Sem")sem3l.push(clib[a])
                else if (clib[a].semester === "VIIth-Sem" || clib[a].semester === "VIIIth-Sem") sem4l.push(clib[a])
                else courseListLab.push(clib[a].courseName)
            }
            sem1l.forEach(course=>courseListLab.push(course.courseName))
            sem2l.forEach(course=>courseListLab.push(course.courseName))
            sem3l.forEach(course=>courseListLab.push(course.courseName))
            sem4l.forEach(course=>courseListLab.push(course.courseName))
            setTheoryList(courseListTheory)
            setLabList(courseListLab)
            console.log(courseListTheory.length, courseListLab.length)
        })
        firebase.database().ref('StaffList/' + slug.split('.').join("")).once(('value'), snap => {
            shortForm = snap.val().shortName
            console.log(shortForm)
            setShort(shortForm)
        })
        setIsLoading('0')
    }

    function TitleArea() {
        return (
            <div className='topArea1'>
                <div className='titleArea1'>{slug}</div>                
            </div>
        )
    }

    function WaitForDataRender() {
        if (isLoading === '1') return <div>Loading</div>
        return (
            <div>
                <TitleArea />
                <div className='AddData'>
                    <Typography style={{fontFamily: 'Mulish', textAlign: 'center'}} variant='h5'>Theory Section</Typography>
                    <TextField
                        style={{ marginTop: '2%' }}
                        fullWidth
                        className={classes.form}
                        id="outlined-select-dept"
                        select
                        label="Theory1"
                        helperText="Select 1st Choice"
                        variant="outlined"
                        onChange={e => {
                            t1=e.target.value
                        }}
                    >
                        {theoryList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        style={{ marginTop: '2%' }}
                        fullWidth
                        className={classes.form}
                        id="outlined-select-dept"
                        select
                        label="Theory2"
                        helperText="Select 2nd Choice"
                        variant="outlined"
                        onChange={e => {
                            t2 = e.target.value
                        }}
                    >
                        {theoryList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        style={{ marginTop: '2%' }}
                        fullWidth
                        className={classes.form}
                        id="outlined-select-dept"
                        select
                        label="Theory3"
                        helperText="Select 3rd Choice"
                        variant="outlined"
                        onChange={e => {
                            t3 = e.target.value
                            console.log(short)
                        }}
                    >
                        {theoryList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        style={{ marginTop: '2%' }}
                        fullWidth
                        className={classes.form}
                        id="outlined-select-dept"
                        select
                        label="Theory4"
                        helperText="Select 4th Choice"
                        variant="outlined"
                        onChange={e => {
                            t4=e.target.value
                        }}
                    >
                        {theoryList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className='AddData'>
                    <Typography style={{fontFamily: 'Mulish', textAlign: 'center'}} variant='h5'>Laboratory Section</Typography>
                    <TextField
                        style={{ marginTop: '2%' }}
                        fullWidth
                        className={classes.form}
                        id="outlined-select-dept"
                        select
                        label="Lab1"
                        helperText="Select 1st Choice"
                        variant="outlined"
                        onChange={e => {
                            l1=e.target.value
                        }}
                    >
                        {labList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        style={{ marginTop: '2%' }}
                        fullWidth
                        className={classes.form}
                        id="outlined-select-dept"
                        select
                        label="Lab2"
                        helperText="Select 2nd Choice"
                        variant="outlined"
                        onChange={e => {
                            l2=e.target.value
                        }}
                    >
                        {labList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <Button
                    onClick={() => {
                        const staffRef = firebase.database().ref()
                        staffRef.child('StaffList/'+slug.split('.').join("")).child('theory1').set(t1)
                        staffRef.child('StaffList/'+slug.split('.').join("")).child('theory2').set(t2)
                        staffRef.child('StaffList/'+slug.split('.').join("")).child('theory3').set(t3)
                        staffRef.child('StaffList/'+slug.split('.').join("")).child('theory4').set(t4)
                        staffRef.child('StaffList/'+slug.split('.').join("")).child('lab1').set(l1)
                        staffRef.child('StaffList/' + slug.split('.').join("")).child('lab2').set(l2)
                        const courseRef = firebase.database().ref()
                        courseRef.child('CourseList/' + t1).child('Prefered1').child(slug.split('.').join("")).set(short)
                        courseRef.child('CourseList/' + t2).child('Prefered2').child(slug.split('.').join("")).set(short)
                        courseRef.child('CourseList/' + t3).child('Prefered3').child(slug.split('.').join("")).set(short)
                        courseRef.child('CourseList/' + t4).child('Prefered4').child(slug.split('.').join("")).set(short)
                        courseRef.child('CourseList/' + l1).child('Prefered1').child(slug.split('.').join("")).set(short)
                        courseRef.child('CourseList/' + l2).child('Prefered2').child(slug.split('.').join("")).set(short).then(on=> {
                            if (!alert("Successfully added your choices")) {
                                window.location.reload()
                            }
                        })
                    }}
                    variant="contained"
                    size="large"
                    startIcon={<SaveIcon />}
                    style={{float: 'right', marginRight: '60px',marginBottom: '30px', backgroundColor: '#E6AF2E'}}
                >
                    Save
                </Button>
                <Button
                    onClick={() => window.location.reload()}
                    variant="contained"
                    size="large"
                    startIcon={<ClearAllIcon />}
                    style={{float: 'right', marginRight: '30px',marginBottom: '30px', backgroundColor: '#E6AF2E'}}
                >
                    Clear
                </Button>
            </div>
        )
    }

    return (
        <WaitForDataRender />
    )
}
