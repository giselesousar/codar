import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Box,MenuItem, IconButton, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: "transparent",
    color: "#000",
    padding: 5,
  },
  title:{
    fontSize: 30
  },
  menuButton:{
    fontSize: 45,
  },
  textAppbar:{
    color: "#D6000D"
  }
  }));

export default function TopMenu(){
    const classes = useStyles();

    return(
        <AppBar position="relative" elevation={0} className={classes.appBar}>
      <Toolbar>
          <Box display='flex' flexGrow={1}>
            <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            >
                 <i className={classes.textAppbar}>Codar</i>.
            </IconButton>
        </Box>
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
      </Toolbar>
    </AppBar>
    )
}