import React from 'react';
import './App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

import Routes from './routes';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#d6000d",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
