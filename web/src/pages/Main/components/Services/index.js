import React from 'react';
import {Grid, Typography, Box, Button, Input, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {CheckBoxRounded, AccountCircleRounded} from '@material-ui/icons';
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
       
    },
    card:{
        backgroundColor: "rgb(0,0,0,5%)",
        height: "25vh"
    },
    cardContent:{
        padding: 10,
    },
    AccountIconContainer:{
        display: "flex",
        justifyContent: "center",
        height: "100%"
    },
    AccountIcon:{
        fontSize: "80px"
    },
    cardsContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
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
            <Grid container lg={10} xs={12} spacing={3} className={classes.cardsContainer}>
                    <Grid item lg={6} xs={10}>
                        <Card className={classes.card}>
                            <Grid container spacing={3} className={classes.cardContent}>
                            <Grid item lg={3} xs={3}>
                                <div className={classes.AccountIconContainer}>
                                <AccountCircleRounded color="primary" className={classes.AccountIcon}/>
                                </div>
                            </Grid>
                            <Grid item lg={9} xs={9}>
                                <Typography variant="body1">
                                    Já tive experiências com outras 4 empresas da área e a Codar é sem sombra de dúvidas superior em todos os aspectos.
                                </Typography>
                                <Typography variant= "h5">
                                    Pedro Ferreira
                                </Typography>
                                <Typography variant= "h6">
                                    Construtora Minari
                                </Typography>
 
                            </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item lg={6} xs={10}>
                        <Card className={classes.card}>
                            <Grid container spacing={3} className={classes.cardContent}>
                            <Grid item lg={3} xs={3}>
                                <div className={classes.AccountIconContainer}>
                                <AccountCircleRounded color="primary" className={classes.AccountIcon}/>
                                </div>
                            </Grid>
                            <Grid item lg={9} xs={9}>
                                <Typography variant="body1">
                                    Processos bem simples e criação de um site exatamente como a minha escola queria!                                </Typography>
                                <Typography variant= "h5">
                                    Maria Rita
                                </Typography>
                                <Typography variant= "h6">
                                    Escola Criança Feliz
                                </Typography>
 
                            </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}