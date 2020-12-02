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

export const names = ['Dr.D.Shanthi Prof.& Head', 'Dr.N.Uma Maheswari Prof.', 'Dr.K.Dhanalakshmi Prof.', 'Dr.M.S.Thanabal Prof.', 'Dr.S.Pushpalatha Prof.', 'Dr.R.Karthikeyan Prof.', 'Dr.P.Gokulakrishnan Prof.', 'Dr.A.Thomas Paul Roy Prof.', 'Dr.D.Suresh Prof.', 'Dr.N.Dhanalakshmi Prof.', 'Dr.S.Satheesbabu Asso.Prof.', 'Dr.S.Jeyanthi Asso.Prof.', 'Dr.K.Manivannan Asso.Prof.', 'Dr.J.Benadictraja Asso.Prof.', 'Dr.M.Buvana Asso.Prof.', 'Dr.M.Balasubramani Asso.Prof.', 'Dr.A.Sathya Sofia Asso.Prof.', 'Mr.K.Suresh Asso.Prof.', 'Mrs.J.Punitha Nicoline Asso.Prof.', ' Dr.Y.Arockia Raj Asso.Prof.', 'Dr.D.M.D.Preethi Asso.Prof.', 'Dr. A. H. Nandhu Kishore Asso.Prof.', 'Ms.S.Naganandhini Asso.Prof.', 'Mr.N.Rajesh Pandian Asso.Prof.', 'Mrs.C.Sathya Asso.Prof.', 'Mrs.K.Kalaivani Asso.Prof.', 'Mr.V.Nanda Kumar Asso.Prof.', 'Mrs.S.Santhana Prabha Asso.Prof.', 'Ms.S.T.Shenbagavalli Asso.Prof.', 'Mrs.G.Mariammal Asso.Prof.', 'Mrs.V.Priya Asso.Prof.', 'Mrs.M.Jayanthi Asso.Prof.', 'Mrs.A.Joyce Asso.Prof.', 'Mr.B.Sakthi Karthidurai Asso.Prof.', 'Mrs.K.Gayathri Asso.Prof.', 'Mr.T.Selvakumar Asso.Prof.', 'Mr.S.M.Prabin Asso.Prof.', 'Mr.N.Selvaganesh Asso.Prof.']
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


