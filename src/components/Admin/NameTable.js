import React, { useState } from 'react'
import './NameTable.css'
import firebase from 'firebase/app'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

export default function NameTable() {
    const [isLoading, setIsLoading] = useState('1')
    const [userData, setUserData] = useState([])
    const [yearSem, setYearSem] = useState(['2021-2022','ODD'])

    function dataLoader() {
        let staffsArray = [], lvl1=[],lvl2=[],lvl3=[],lvl4=[]
        firebase.database().ref('StaffList/').once('value', snap => {
            snap.forEach(item => {
                if (item.val().position === "Prof. & Head") lvl1.push(item.val())
                if (item.val().position === "Prof.") lvl2.push(item.val())
                if (item.val().position === "Asso. Prof.") lvl3.push(item.val())
                if (item.val().position === "Asst. Prof.") lvl4.push(item.val())
            })
            lvl1.forEach(staff => {
                staffsArray.push(staff)
            })
            lvl2.forEach(staff => {
                staffsArray.push(staff)
            })
            lvl3.forEach(staff => {
                staffsArray.push(staff)
            })
            lvl4.forEach(staff => {
                staffsArray.push(staff)
            })
            setUserData(staffsArray)
        })
        setIsLoading('0')
    }

    function Tabler() {
        return (
            <div className='StaffBasedList'>
                <Table>
                    <TableContainer component={Paper}>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Name</TableCell>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Theory1</TableCell>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Theory2</TableCell>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Theory3</TableCell>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Theory4</TableCell>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Lab1</TableCell>
                                <TableCell align='center' style={{fontFamily: 'Mulish', fontWeight: 'bolder'}}>Lab2</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{
                            userData.map(item => {
                                return (
                                    <TableRow>
                                        <TableCell align='left' style={{fontFamily: 'Mulish'}}>{item.fullName}</TableCell>
                                        <TableCell align='center' style={{fontFamily: 'Mulish'}}>{item.theory1}</TableCell>
                                        <TableCell align='center' style={{fontFamily: 'Mulish'}}>{item.theory2}</TableCell>
                                        <TableCell align='center' style={{fontFamily: 'Mulish'}}>{item.theory3}</TableCell>
                                        <TableCell align='center' style={{fontFamily: 'Mulish'}}>{item.theory4}</TableCell>
                                        <TableCell align='center' style={{fontFamily: 'Mulish'}}>{item.lab1}</TableCell>
                                        <TableCell align='center' style={{fontFamily: 'Mulish'}}>{item.lab2}</TableCell>
                                    </TableRow>
                                )
                            })
                        }</TableBody>
                    </TableContainer>
                </Table>
            </div>
        )
    }

    function Decider() {
        let yearInit = ""
        let courseInit = ""
        if (isLoading === '1') {
            dataLoader()
            return <div>Loading</div>
        }
        else return (
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
        <Decider />
    )
}
