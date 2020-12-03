import React, { useEffect, useState } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { TableCell } from '@material-ui/core';
import { fbref } from '../App'
import {names} from './ListOfTeachers'

export default function PreferredList(props) {
    const [load, setLoad] = useState('0')
    const customColumnStyle = {
        wordWrap: "break-word",
        maxWidth: "30px",
    };
    
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
        }

    const CustomTableCell = withStyles(theme => ({
    
    }))(TableCell);

    if(!load){
        fbref.database().ref("prefData/").once('value',snap=>{
            const data = snap.val()
            for(var item in data){
                var staff = names[item].split('.').join("")
                var list = data["PrefData"].staff
                for(var x in list){
                    if(list[x]==="Name")continue
                    subs[list[x]]+=staff+" "
                }
            }
            setLoad('1')
        })
    }
          
    function Decider(){
        if(load === '1')return <div>d</div>
        else return <div>loading</div>
    }

    return (<Decider/>)
}
