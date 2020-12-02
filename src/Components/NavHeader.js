import React from 'react';
import './Styles/NavHeader.css';
import logo from "../icons/logo.png";
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';  

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: "16px",
  },
  needed:{
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));


function NavHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
      <AppBar style={{background:"#002e63"}} position="sticky">
        <Toolbar>
          <img src={logo} alt='logopsna' className="logo"></img>
          <Typography variant="h6" className={classes.title}>SubjectAllocation</Typography>
          <Link to='Admin' style={{textDecoration:"none"}}><Button style={{backgroundColor: "#ff2052"}} variant="contained">ADMIN</Button></Link>      
        </Toolbar>
        <div style={{alignSelf:"flex-end"}}><Typography style={{textAlign:"flex-end",color:"#fff",marginRight:"10px"}} variant="subtitle1">Powered by H45H</Typography></div>
      </AppBar>
    </div>
  );
}

export default NavHeader;

