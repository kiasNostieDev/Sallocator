import React, { useState } from 'react'
import './SubTable.css'
import firebase from 'firebase/app'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

export default function SubTable() {
    const [isLoading, setIsLoading] = useState('1')
    const [courseData, setCourseData] = useState([])
    const [yearSem, setYearSem] = useState(['2021-2022','ODD'])

    function dataLoader() {
        let courseDataInit = []
        firebase.database().ref('CourseList/').once('value', snap => {
            snap.forEach(item => {
                let staffPref = ""
                let staffPref1 = item.val().Prefered1
                let staffPref2 = item.val().Prefered2
                let staffPref3 = item.val().Prefered3
                let staffPref4 = item.val().Prefered4
                if (staffPref1 !== undefined) {
                    for (let key in staffPref1) {
                        staffPref += staffPref1[key] + ", "
                    }
                }
                if (staffPref2 !== undefined) {
                    for (let key in staffPref2) {
                        staffPref += staffPref2[key] + ", "
                    }
                }
                if (staffPref3 !== undefined) {
                    for (let key in staffPref3) {
                        staffPref += staffPref3[key] + ", "
                    }
                }
                if (staffPref4 !== undefined) {
                    for (let key in staffPref4) {
                        staffPref += staffPref4[key] + ", "
                    }
                }
                console.log(staffPref)
                courseDataInit.push([item.key, staffPref])
            })
            setCourseData(courseDataInit)
        })
        setIsLoading('0')
    }

    function Tabler() {
        console.log(courseData)
        return (
            <div className='StaffBasedList'>
                <Table>
                    <TableContainer component={Paper}>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>CourseName</TableCell>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Prefered List</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{
                            courseData.map(item => {
                                return (
                                    <TableRow>
                                        <TableCell>{item[0]}</TableCell>
                                        <TableCell>{item[1]}</TableCell>
                                    </TableRow>
                                )
                            })
                        }</TableBody>
                    </TableContainer>
                </Table>
            </div>
        )
    }

    function Loader() {
        let yearInit = ""
        let courseInit = ""
        if (isLoading === '1') {
            dataLoader()
            return <div>Loading</div>
        } else return (
            <div>
                <Typography fullWidth style={{ fontFamily: 'Mulish', textAlign: 'center'}} variant='h5'>PSNA College Of Engineering and Technology</Typography>
                <Typography style={{ fontFamily: 'Mulish', textAlign: 'center'}} variant='h6'>Computer Science And Engineering Department</Typography>
                <Typography onClick={val => {
                    yearInit = prompt("Enter the year", "2021-2022")
                    courseInit = prompt("Enter the Sem Type", "ODD/EVEN")
                    setYearSem([yearInit, courseInit])
                }} style={{ fontFamily: 'Mulish', textAlign: 'center'}} variant='h6'>{"Academic year: "+yearSem[0]+" / "+yearSem[1]+" Semester"}</Typography>
                <div className='border'></div>
                <Tabler />
                <Typography style={{marginTop: '50px', marginRight: '5%', fontFamily: 'Mulish', textAlign: 'right', fontSize: '12pt', fontWeight: 'bolder'}}>HOD Signature</Typography>
            </div>
        )
    }

    return (
        <Loader />
    )
}
