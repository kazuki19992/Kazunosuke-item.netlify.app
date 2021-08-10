import React from 'react';
import Appbar from './components/AppBar';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { lightGreen, deepOrange } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import ItemPage from './pages/Item';
import AboutPage from './pages/About';
import Top from './pages/Top';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {

  const theme = createTheme({
    palette:{
      primary: lightGreen,
      secondary: deepOrange
    }
  })
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Appbar />
          <Container>
            <Route path="/" component={Top} />
            <Route path="/Item/:id" component={ItemPage} />
            <Route path="/About" component={AboutPage} />
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
