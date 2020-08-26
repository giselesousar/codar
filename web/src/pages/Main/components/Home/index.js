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
        height: "90vh",
        [theme.breakpoints.down('xs')]:{
            height: "75vh"
        }
    },
    image:{
        maxWidth: "90%",
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
        height: "100%",
        [theme.breakpoints.down('xs')]:{
            textAlign: "center"
        }
    },
    button:{
        borderRadius: 10,
        fontSize: 17
    },
    text1:{
        fontWeight: "bold",
        [theme.breakpoints.down('xs')]:{
            fontSize: 20
        }
    },
    text2:{
        fontWeight: "bold",
        [theme.breakpoints.down('xs')]:{
            fontSize: 45
        }
    },
    imageContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

export default function Home(){

    const classes = useStyles();

    return(
        <div>
            <TopMenu/>
            <Grid container  className={classes.contentCenter}>
            <Grid container lg={10} xs={12} spacing={5}>
                <Grid item lg={6} xs={12} className={classes.imageContainer}>
                    <img className={classes.image} src={img}/>
                </Grid>
                <Grid item lg={6} xs={12} className={classes.text}>
                    <Box className={classes.boxText}>
                        <div>
                        <div className={classes.textContainer}>
                            <Typography variant="h5" className={classes.text1}>
                                Alavanque seu negócio com um
                            </Typography>
                            <Typography variant="h2" color="primary" className={classes.text2}>
                                Website incrível
                            </Typography>
                        </div>
                        <Button size="large" variant="contained" color="primary" className={classes.button}>
                            Solicitar orçamento
                        </Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}