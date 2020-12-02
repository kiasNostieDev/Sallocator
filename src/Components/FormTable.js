import React, {useState } from 'react'
import {Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fbref } from '../App'
import {names} from './ListOfTeachers'
import Test from './Test'

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

var count = 1

export default function FormTable(props) {

  var classes = useStyles()
  const [nameData, setNameData] = useState([])

  function TableHeader(){
    return (
      <div>
          <Typography align="center">PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY, DINDUGAL-624622</Typography> 
          <Typography align="center" style={{justifyContent:"flex-start"}}>DEPARTMENT : CSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SEMSETER : ODD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AC. YEAR : 2020-2021</Typography>
          <Typography  align="center">SUBJECT ALLOCATION(UG and PG)</Typography>
      </div>
      )
  }

  return (
      <>
        <TableHeader />
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">S.No</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center" colSpan={2}>Subjects Preferred</TableCell>
                  <TableCell align="center" colSpan={2}>Subjects Allocated</TableCell>
                  <TableCell align="center">Signature</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Subjects preference</TableCell>
                  <TableCell align="center">Lab preference</TableCell>
                  <TableCell align="center">Subjects allocated</TableCell>
                  <TableCell align="center">Lab allocated</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {names.map(item=>{
                  count = names.indexOf(item)+1
                  return <Test count={count} val={item}/>
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
      </>
    )
}
