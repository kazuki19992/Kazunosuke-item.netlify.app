import React from 'react';
import Appbar from './components/AppBar';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { lightGreen, deepOrange } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import ItemPage from './pages/Item';
import AboutPage from './pages/About';

import './App.css';

function App() {

  const theme = createTheme({
    palette:{
      primary: lightGreen,
      secondary: deepOrange
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Appbar />
        <Container>
          {/* <ItemPage /> */}
          <AboutPage />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
