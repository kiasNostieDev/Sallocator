import React, { useEffect, useState } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from '@material-ui/core';
import { fbref } from '../App'
import {names} from './ListOfTeachers'
import {shorties} from './CourseTable'

export default function PreferredList(props) {
    const jointnames = [
        "DrDShanthi Prof& Head",
        "DrNUma Maheswari Prof",
        "DrKDhanalakshmi Prof",
        "DrMSThanabal Prof",
        "DrSPushpalatha Prof",
        "DrRKarthikeyan Prof",
        "DrPGokulakrishnan Prof",
        "DrAThomas Paul Roy Prof",
        "DrDSuresh Prof",
        "DrNDhanalakshmi Prof",
        "DrSSatheesbabu AssoProf",
        "DrSJeyanthi AssoProf",
        "DrKManivannan AssoProf",
        "DrJBenadictraja AsstProf",
        "DrMBuvana AsstProf",
        "DrMBalasubramani AsstProf",
        "DrASathya Sofia AsstProf",
        "MrKSuresh AsstProf",
        "MrsJPunitha Nicoline AsstProf",
        " DrYArockia Raj AsstProf",
        "DrDMDPreethi AsstProf",
        "Dr A H Nandhu Kishore AsstProf",
        "MsSNaganandhini AsstProf",
        "MrNRajesh Pandian AsstProf",
        "MrsCSathya AsstProf",
        "MrsKKalaivani AsstProf",
        "MrVNanda Kumar AsstProf",
        "MrsSSanthana Prabha AsstProf",
        "MsSTShenbagavalli AsstProf",
        "MrsGMariammal AsstProf",
        "MrsVPriya AsstProf",
        "MrsMJayanthi AsstProf",
        "MrsAJoyce AsstProf",
        "MrBSakthi Karthidurai AsstProf",
        "MrsKGayathri AsstProf",
        "MrTSelvakumar AsstProf",
        "MrSMPrabin AsstProf",
        "MrNSelvaganesh AsstProf",
    ]
    const [load, setLoad] = useState('0')
    const customColumnStyle = {
        wordWrap: "break-word",
        maxWidth: "30px",
    };
    
    const [vas, setVAS] = useState()

    const CustomTableCell = withStyles(theme => ({
    
    }))(TableCell);

    if(load==='0'){
        var subs =
        {
        'II CSE-CS8251-Programming in C': "",
        'IV CSE-CS8491-Computer Architecture': "",
        'IV CSE-CS8492-Database Management Systems': "",
        'IV CSE-CS8451-Design and Analysis of Algorithms': "",
        'IV CSE-CS8493-Operating Systems': "",
        'IV CSE-CS8494-Software Engineering': "",
        'VI  CSE-CS8651-Internet Programming': "",
        'VI  CSE-CS8691-Artificial Intelligence': "",
        'VI  CSE-CS8601-Mobile Computing': "",
        'VI  CSE-CS8602-Compiler Design': "",
        'VI  CSE-CS8603-Distributed Systems': "",
        'VIII CSE-CS8080-Information Retrieval Techniques': "",
        'VI CSE-CS8075-Data warehousing and Data mining': "",
        'IV BME-Fundamentals of Data Structures and Algorithms': "",
        'II ME CSE-CP5201-Network Design and Technologies': "",
        'II ME CSE-CP5291-Security Practices': "",
        'II ME CSE-CP5292-Internet of Things': "",
        'II ME CSE-CP5293-Big Data Analytics': "",
        'II ME CSE-CP5094-Information Retrieval Techniques': "",
        'II CSE-CS8261-C Programming Laboratory': "",
        'IV CSE-CS8481-Database Management Systems Laboratory': "",
        'IV CSE-CS8461-Operating Systems Laboratory': "",
        'VI  CSE-CS8661-Internet Programming Laboratory': "",
        'VI  CSE-CS8662-Mobile Application Development Laboratory': "",
        'VI  CSE-CS8611-Mini Project': "",
        'VIII Project': "",
        }

        fbref.database().ref("PrefData/").once('value',snap=>{
            const data = snap.val()
            for(var item in data){
                for(var x in data[item]){
                    var count = jointnames.indexOf(item)
                    subs[data[item][x]]+=shorties[count]+", " 
                }
            }
            setVAS(subs)
        }).then(res=>{
             setLoad('1')   
        })
        console.log(vas)
    }
          
    function Decider(){
        if(load === '1')return(
            <TableRow>
                <TableCell align="center">{props.count}</TableCell>
                <TableCell align="left">{props.val}</TableCell>
                <TableCell>{vas[props.val]}</TableCell>
            </TableRow>
        )
        else return <div>loading</div>
    }

    return (<Decider/>)
}
