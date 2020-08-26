import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexFlow: "column",
        height: "120vh",
        [theme.breakpoints.down('xs')]:{
            height: "100vh"
        }
    },
    section2: {
        display: "flex",
        flexFlow: "column",
        height: "150vh",
        [theme.breakpoints.down('xs')]:{
            height: "140vh"
        }
    }
  }));

export default function Main(){
    const classes = useStyles();

    return(
        <div>
            <div className={classes.root}>
            <Home/>
            </div>
            <div className={classes.section2}>

            <Services/>
            </div>
            <Footer/>
        </div>
    )
}