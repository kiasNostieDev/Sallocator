import React, {useState, useEffect} from 'react'
import {fbref} from '../App'
import {names} from './ListOfTeachers'
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
import {CustomTableCell} from '@material-ui/core/';
import TableCell from '@material-ui/core/TableCell'

export default function Test({val, count,sitem}){

    const customColumnStyle = {
        wordWrap: "break-word",
        maxWidth: "30px",
      };

    const CustomTableCell = withStyles(theme => ({
        
      }))(TableCell);

    const [a,setA] = useState({
        "Name":"",
        "1st_Preference":"",
        "2nd_Preference":"",
        "3rd_Preference":"",
        "4th_Preference":"",
        "1st_lab_Preference":"",
        "2nd_lab_Preference":""
    })

    useEffect(()=>{
        var dummy = {
            "Name":"",
            "1st_Preference":"",
            "2nd_Preference":"",
            "3rd_Preference":"",
            "4th_Preference":"",
            "1st_lab_Preference":"",
            "2nd_lab_Preference":""
        }
        fbref.database().ref("PrefData/"+val.split('.').join("")).once('value',snap=>{
            var data = snap.val()
            for(var item in data){
                dummy[item] = data[item]
                if(data[item]==="")dummy[item]='null'
            }
            setA(dummy)
        })
    },[])


    return (
        <TableRow>
                    <TableCell align="center">{count}</TableCell>
                    <TableCell align="left">{val}</TableCell>
                    <TableCell>
                      <TableRow><CustomTableCell style={customColumnStyle}>{a['1st_Preference']}</CustomTableCell></TableRow>
                      <TableRow><TableCell>{a['2nd_Preference']}</TableCell></TableRow>
                      <TableRow><TableCell>{a['3rd_Preference']}</TableCell></TableRow>
                      <TableRow><TableCell>{a['4th_Preference']}</TableCell></TableRow> 
                    </TableCell>
                    <TableCell>
                      <TableRow><TableCell>{a['1st_lab_Preference']}</TableCell></TableRow>
                      <TableRow><TableCell>{a['2nd_lab_Preference']}</TableCell></TableRow>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
          </TableRow>
      )
}
