import React from 'react';
import TopMenu from './components/TopMenu';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Typography, Button} from '@material-ui/core';
import img from '../../../../assets/video_call.png'

const useStyles = makeStyles((theme) => ({
    contentCenter:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
    },
    image:{
        maxWidth: "100%",
        height: "auto",
        display: "block",
    },
    text:{
    },
    textContainer:{
        marginBottom: 30,
    },
    boxText:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    button:{
        backgroundColor: "#d6000d",
        color: "#fff",
        borderRadius: 10
    },
    text:{
        fontWeight: "bold",
    }
}));

export default function Home(){

    const classes = useStyles();

    return(
        <div>
            <TopMenu/>
            <Grid container  className={classes.contentCenter}>
            <Grid container lg={9} spacing={5}>
                <Grid item lg={6} xs={12}>
                    <img className={classes.image} src={img}/>
                </Grid>
                <Grid item lg={6} xs={12} className={classes.text}>
                    <box className={classes.boxText}>
                        <div>
                        <div className={classes.textContainer}>
                            <Typography variant="h5" className={classes.text}>
                                Alavanque seu negócio com um
                            </Typography>
                            <Typography variant="h2" color="primary" className={classes.text}>
                                Website incrível
                            </Typography>
                        </div>
                        <Button size="large" variant="contained" color="primary">
                            Solicitar orçamento
                        </Button>
                        </div>
                    </box>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}