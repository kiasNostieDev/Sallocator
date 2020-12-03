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

const shorties = ['DSS', 'NU', 'KD', 'MST', 'SPL', 'RK', 'PGK', 'ATP', 'DS', 'ND', 'SSB', 'SJ', 'KM', 'JBR', 'MB', 'MBS', 'ASS', 'KS', 'JPN', 'YAR', 'DMDP', 'AHNK', 'SNN', 'NRP', 'CS', 'KK', 'VNK', 'SSP', 'STS', 'GM', 'VP', '----', '-----', 'SKD', 'KG', 'TSK', 'SMP', 'NSG']
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
                            <TableCell align="center">Subject Name</TableCell>
                            <TableCell align="center">Staffs Selected</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {names.map(item=>{
                            var count = names.indexOf(item)+1
                            var sitem = shorties[count-1]
                            return <PreferredList count={count} sitem={sitem} val={item}/>
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
