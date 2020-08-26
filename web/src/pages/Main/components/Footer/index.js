import React from 'react';
import {Grid, Typography, Box, Button, Input} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Facebook, Instagram, Twitter} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: "#000",
        height: "50vh",
        [theme.breakpoints.down('xs')]:{
            height: "90vh"
        }
    }, 
    containerItems:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
    },
    title:{
        color: "#fff",
        fontWeight: "bold",
        [theme.breakpoints.down('xs')]:{
            fontSize: 40,
        }
    },
    text:{
        color: "#fff",
        fontSize: 23,
        [theme.breakpoints.down('xs')]:{
            fontSize: 23,
        }
    },
    boxItems:{
        height: "50%",
        width: "100%",
        margin: 10
    },
    icon:{
        fontSize: "50px"
    },
    boxIcons:{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        [theme.breakpoints.down('xs')]:{
            width: "50%"
        }
    }
}));
export default function Footer(){
    const classes = useStyles();

    return(
        <div>
            <Grid container className={classes.container}>
                <Grid item lg={3} xs={12} className={classes.containerItems}>
                    <div className={classes.boxItems}>
                    <Typography variant="h2" className={classes.title} paragraph>
                        <i>Codar.</i>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        Criamos websites incríveis
                    </Typography>
                    </div>
                </Grid>
                <Grid item lg={3} xs={12} className={classes.containerItems}>
                    <div className={classes.boxItems}>
                    <Typography variant="h3" className={classes.title} paragraph>
                        Sobre
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        Amamos criar soluções e entregar sites incríveis
                    </Typography>
                    </div>
                </Grid>
                <Grid item lg={3} xs={12} className={classes.containerItems}>
                    <div className={classes.boxItems}>
                    <Typography variant="h3" className={classes.title} paragraph>
                        Contato
                    </Typography>
                    <Typography variant="body1" className={classes.text} paragraph>
                        123 Av.Manjar - Nárnia
                    </Typography>
                    <Typography variant="body1" className={classes.text} paragraph>
                        +55 96 2321-3131
                    </Typography>
                    <Typography variant="body1" style={{textDecoration: "underline"}} className={classes.text} paragraph>
                        contato@contato.com
                    </Typography>
                    </div>
                </Grid>
                <Grid item lg={3} xs={12} className={classes.containerItems}>
                    <div className={classes.boxItems}>
                    <Typography variant="h3" className={classes.title} paragraph>
                        Redes Sociais
                    </Typography>
                    <Box className={classes.boxIcons}>
                        <Facebook className={classes.icon} color="primary"/>
                        <Instagram className={classes.icon} color="primary"/>
                        <Twitter className={classes.icon} color="primary"/>
                    </Box>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}