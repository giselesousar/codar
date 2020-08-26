import React from 'react';
import {Grid, Typography, Box, Button, Input} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {CheckBoxRounded} from '@material-ui/icons';
import img from '../../../../assets/coding_.png'

const useStyles = makeStyles((theme) => ({
    contentCenter:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
    },
    button:{
        borderRadius: 16,
        width: "100%",
        height: "100%",
        fontSize: 20,
        fontWeight: "bold"
    },
    imageContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('xs')]:{
            display: "none"
        }
    },
    icon:{
        fontSize: "35px",
        marginRight: 10
    },
    input:{
        backgroundColor: "rgb(0,0,0,5%)",
        borderRadius: 16,
        fontSize: 30,
        padding: 10,
        width: "100%",
        marginRight: 15
    },

    contactContainer:{
        [theme.breakpoints.down('xs')]:{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    },
    textContact:{
        fontWeight: "bold",
        [theme.breakpoints.down('xs')]:{
            fontSize: 25,
            textAlign: "center"
        }
       
    }
}));

export default function Services(){
    const classes = useStyles();

    return(
        <div>
            <Grid container  className={classes.contentCenter}>
            <Grid container lg={10} xs={12} spacing={6}>
                
                <Grid item lg={5} xs={12} className={classes.text}>
                    <Box className={classes.boxText}>
                        <div>
                        <div className={classes.textContainer}>
                            <Typography variant="h4" className={classes.text} paragraph={true}>
                              <CheckBoxRounded className={classes.icon} color="primary"/>  Domínio personalizado
                            </Typography>
                            <Typography variant="h4" className={classes.text} paragraph={true}>
                              <CheckBoxRounded className={classes.icon} color="primary"/>  Hospedagem
                            </Typography>
                            <Typography variant="h4" className={classes.text} paragraph={true}>
                              <CheckBoxRounded className={classes.icon} color="primary"/>  Site responsivo
                            </Typography>
                            <Typography variant="h4" className={classes.text} paragraph={true}>
                              <CheckBoxRounded className={classes.icon} color="primary"/>  Redes sociais
                            </Typography>
                            <Typography variant="h4" className={classes.text} paragraph={true}>
                              <CheckBoxRounded className={classes.icon} color="primary"/>  Chat online
                            </Typography>
                            <Typography variant="h4" className={classes.text} paragraph={true}>
                              <CheckBoxRounded className={classes.icon} color="primary"/>  Blog integrado
                            </Typography>
                        </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item lg={7} xs={12} className={classes.imageContainer}>
                    <img className={classes.image} src={img}/>
                </Grid>
            </Grid>
            <Grid item lg={10}>
                <Typography variant="h4" paragraph className={classes.textContact}>
                    Nossa equipe está à disposição!
                </Typography>
                <Grid container lg={8} xs={12} className={classes.contactContainer} spacing={2}>
                    <Grid item xs={10} lg={6}>
                        <Input placeholder="Celular" type="text" className={classes.input} disableUnderline/>
                    </Grid>
                    <Grid item xs={10} lg={6}>
                        <Button size="large" variant="contained" color="primary" className={classes.button}>Ligamos para você</Button>
                    </Grid>
                </Grid>
            </Grid>

            </Grid>

        </div>
    )
}