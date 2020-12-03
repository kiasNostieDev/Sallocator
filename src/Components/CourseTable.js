import React from 'react'
import {Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Test from './Test'
import {names} from './ListOfTeachers'
import PreferredList from './PreferredList';

const subs =[
    'II CSE-CS8251-Programming in C',
    'IV CSE-CS8491-Computer Architecture',
    'IV CSE-CS8492-Database Management Systems',
    'IV CSE-CS8451-Design and Analysis of Algorithms',
    'IV CSE-CS8493-Operating Systems',
    'IV CSE-CS8494-Software Engineering',
    'VI  CSE-CS8651-Internet Programming',
    'VI  CSE-CS8691-Artificial Intelligence',
    'VI  CSE-CS8601-Mobile Computing',
    'VI  CSE-CS8602-Compiler Design',
    'VI  CSE-CS8603-Distributed Systems',
    'VIII CSE-CS8080-Information Retrieval Techniques',
    'VI CSE-CS8075-Data warehousing and Data mining',
    'IV BME-Fundamentals of Data Structures and Algorithms',
    'II ME CSE-CP5201-Network Design and Technologies',
    'II ME CSE-CP5291-Security Practices',
    'II ME CSE-CP5292-Internet of Things',
    'II ME CSE-CP5293-Big Data Analytics',
    'II ME CSE-CP5094-Information Retrieval Techniques',
    'II CSE-CS8261-C Programming Laboratory',
    'IV CSE-CS8481-Database Management Systems Laboratory',
    'IV CSE-CS8461-Operating Systems Laboratory',
    'VI  CSE-CS8661-Internet Programming Laboratory',
    'VI  CSE-CS8662-Mobile Application Development Laboratory',
    'VI  CSE-CS8611-Mini Project',
    'VIII Project'
]
export const shorties = ['DSS', 'NU', 'KD', 'MST', 'SPL', 'RK', 'PGK', 'ATP', 'DS', 'ND', 'SSB', 'SJ', 'KM', 'JBR', 'MB', 'MBS', 'ASS', 'KS', 'JPN', 'YAR', 'DMDP', 'AHNK', 'SNN', 'NRP', 'CS', 'KK', 'VNK', 'SSP', 'STS', 'GM', 'VP', 'Mrs.S.Jayanthi', 'Mrs.A.Joyce', 'SKD', 'KG', 'TSK', 'SMP', 'NSG']
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});

export default function CourseTable() {
    var classes = useStyles()
    
    function TableHeader(){
      return (
        <div>
            <Typography align="center">PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY, DINDUGAL-624622</Typography> 
            <Typography align="center" style={{justifyContent:"flex-start"}}>DEPARTMENT : CSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SEMSETER : EVEN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AC. YEAR : 2020-2021</Typography>
            <Typography  align="center">SUBJECT ALLOCATION(UG and PG)</Typography>
        </div>
        )
    }

    return (
        <div>
            <TableHeader/>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">S.No</TableCell>
                            <TableCell align="left">Subject Name</TableCell>
                            <TableCell align="left">Staffs Selected</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subs.map(item=>{
                            var count = subs.indexOf(item)+1
                            return <PreferredList count={count} val={item}/>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button id="btn" style={{margin:"10px",backgroundColor:"#0ff"}} onClick={()=>{
              window.print()
              document.getElementById('btn')
            }}>
              Print
            </Button>
        </div>
    )
}
