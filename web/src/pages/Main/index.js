import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexFlow: "column",
        height: "100vh"
    }
  }));

export default function Main(){
    const classes = useStyles();

    return(
        <div>
            <div className={classes.root}>
            <Home/>
            </div>
            <div className={classes.root}>

            <Services/>
            </div>
            <div className={classes.root}>

            <Contact/>
            </div>
            <Footer/>
        </div>
    )
}