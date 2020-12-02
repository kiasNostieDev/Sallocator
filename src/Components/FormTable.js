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
import Test from './Test'

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

var count = 1
const names = ['Dr.D.Shanthi', 'Dr.N.Uma Maheswari', 'Dr.K.Dhanalakshmi', 'Dr.M.S.Thanabal', 'Dr.S.Pushpalatha', 'Dr.R.Karthikeyan', 'Dr.P.Gokulakrishnan', 'Dr.A.Thomas Paul Roy', 'Dr.D.Suresh', 'Dr.N.Dhanalakshmi', 'Dr.S.Satheesbabu', 'Dr.S.Jeyanthi', 'Dr.K.Manivannan', 'Dr.J.Benadictraja', 'Dr.M.Buvana', 'Dr.M.Balasubramani', 'Dr.A.Sathya Sofia', 'Mr.K.Suresh', 'Mrs.J.Punitha Nicoline', 'Dr.Y.Arockia Raj', 'Dr.D.M.D.Preethi', 'Dr. A. H. Nandhu Kishore', 'Ms.S.Naganandhini', 'Mr.N.Rajesh Pandian', 'Mrs.C.Sathya', 'Mrs.K.Kalaivani', 'Mr.V.Nanda Kumar', 'Mrs.S.Santhana Prabha', 'Ms.S.T.Shenbagavalli', 'Mrs.G.Mariammal', 'Mrs.V.Priya', 'Mrs.M.Jayanthi', 'Mrs.A.Joyce', 'Mr.B.Sakthi Karthidurai', 'Mrs.K.Gayathri', 'Mr.T.Selvakumar', 'Mr.S.M.Prabin', 'Mr.N.Selvaganesh']
const shorties = ['DSS', 'NU', 'KD', 'MST', 'SPL', 'RK', 'PGK', 'ATP', 'DS', 'ND', 'SSB', 'SJ', 'KM', 'JBR', 'MB', 'MBS', 'ASS', 'KS', 'JPN', 'YAR', 'DMDP', 'AHNK', 'SNN', 'NRP', 'CS', 'KK', 'VNK', 'SSP', 'STS', 'GM', 'VP', '----', '-----', 'SKD', 'KG', 'TSK', 'SMP', 'NSG']

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
                  <TableCell align="center">S.No</TableCell>
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
                  var sitem = shorties[count-1]
                  return <Test count={count} sitem={sitem} val={item}/>
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
