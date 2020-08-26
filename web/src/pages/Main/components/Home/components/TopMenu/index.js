import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Box,MenuItem, IconButton, Typography, Grid} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: "transparent",
    color: "#000",
    padding: 5,
  },
  title:{
    fontSize: 30,
    [theme.breakpoints.down('xs')]:{
      fontSize: 25,
    }
  },
  menuButton:{
    fontSize: 45,
  },
  textAppbar:{
    color: "#D6000D"
  },
  logoContainer: {
    [theme.breakpoints.down('xs')]:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  },
  menuContainer:{
    [theme.breakpoints.down('xs')]:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
  }));

export default function TopMenu(){
    const classes = useStyles();

    return(
        <AppBar position="relative" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Grid container className={classes.menuContainer}>
          <Grid item xs={12} lg={8} >
          <Box display='flex' flexGrow={1} className={classes.logoContainer}>
            <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            >
                 <i className={classes.textAppbar}>Codar</i>.
            </IconButton>
        </Box>
        </Grid>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Início
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Serviços
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Contato
          </Typography>
        </MenuItem>
        </Grid>
      </Toolbar>
    </AppBar>
    )
}