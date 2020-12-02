import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import NavHeader from './NavHeader';
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from '@material-ui/icons/Close'
import {fbref} from '../App'

export const names = ['Dr.D.Shanthi Prof.& Head', 'Dr.N.Uma Maheswari Prof.', 'Dr.K.Dhanalakshmi Prof.', 'Dr.M.S.Thanabal Prof.', 'Dr.S.Pushpalatha Prof.', 'Dr.R.Karthikeyan Prof.', 'Dr.P.Gokulakrishnan Prof.', 'Dr.A.Thomas Paul Roy Prof.', 'Dr.D.Suresh Prof.', 'Dr.N.Dhanalakshmi Prof.', 'Dr.S.Satheesbabu Asso.Prof.', 'Dr.S.Jeyanthi Asso.Prof.', 'Dr.K.Manivannan Asso.Prof.', 'Dr.J.Benadictraja Asst.Prof.', 'Dr.M.Buvana Asst.Prof.', 'Dr.M.Balasubramani Asst.Prof.', 'Dr.A.Sathya Sofia Asst.Prof.', 'Mr.K.Suresh Asst.Prof.', 'Mrs.J.Punitha Nicoline Asst.Prof.', ' Dr.Y.Arockia Raj Asst.Prof.', 'Dr.D.M.D.Preethi Asst.Prof.', 'Dr. A. H. Nandhu Kishore Asst.Prof.', 'Ms.S.Naganandhini Asst.Prof.', 'Mr.N.Rajesh Pandian Asst.Prof.', 'Mrs.C.Sathya Asst.Prof.', 'Mrs.K.Kalaivani Asst.Prof.', 'Mr.V.Nanda Kumar Asst.Prof.', 'Mrs.S.Santhana Prabha Asst.Prof.', 'Ms.S.T.Shenbagavalli Asst.Prof.', 'Mrs.G.Mariammal Asst.Prof.', 'Mrs.V.Priya Asst.Prof.', 'Mrs.M.Jayanthi Asst.Prof.', 'Mrs.A.Joyce Asst.Prof.', 'Mr.B.Sakthi Karthidurai Asst.Prof.', 'Mrs.K.Gayathri Asst.Prof.', 'Mr.T.Selvakumar Asst.Prof.', 'Mr.S.M.Prabin Asst.Prof.', 'Mr.N.Selvaganesh Asst.Prof.']
export const shorties = ['DSS', 'NU', 'KD', 'MST', 'SPL', 'RK', 'PGK', 'ATP', 'DS', 'ND', 'SSB', 'SJ', 'KM', 'JBR', 'MB', 'MBS', 'ASS', 'KS', 'JPN', 'YAR', 'DMDP', 'AHNK', 'SNN', 'NRP', 'CS', 'KK', 'VNK', 'SSP', 'STS', 'GM', 'VP', '----', '-----', 'SKD', 'KG', 'TSK', 'SMP', 'NSG']
const useStyles = makeStyles((theme)=>({
    title: {
        flexGrow: 1,
        color: "#000",
        float: 'left',
        padding: '10px',
        width: '40%',
        marginRight: '50%'
    },
    btn: {
        backgroundColor: "#00ff80",
        width: "100px",
        padding: '10px',
    },
    box: {
        padding: '10px'
    }
}))


export default function ListOfTeachers() {
    const classes = useStyles();

    
    

    function ListItem(props){
        const repolink = '/GiveData/'+props.name
        const [link, setLink] = useState(repolink)
        
        fbref.database().ref("PrefData").once('value',snap=>{
            if(snap.hasChild(props.name.split('.').join(''))){
                setLink('/')
            }
        })
    
        function Already(){
            if(link === repolink){
                return <Link to={link} style={{ textDecoration: 'none'}}><Button startIcon={<CloseIcon/>} className={classes.btn} >Enter</Button></Link>            
            }
            return <Button style={{backgroundColor:"#ff0040"}} startIcon={<CheckCircleRoundedIcon/>} className={classes.btn}>given</Button>
        }

        return(
            <Box className={classes.box} borderBottom={1} borderColor="primary.main" borderRadius="borderRadius">
                <div className="listItem">
                    <Typography  variant="h6" className={classes.title}>{props.name}</Typography>
                    <Already />
                    {/* <Link to={link} style={{ textDecoration: 'none'}}><Button className={classes.btn}>Enter</Button></Link> */}
                </div>
            </Box>
        )
    }

    return (
        <div className='mainList'>
            <NavHeader/>
            {
                names.map(item=><ListItem name={item}/>)
            }
        </div>
    )
}


