import React from 'react'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    // zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar (props) {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{color: '#234915'}}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          あいてむカズ之助
        </Typography>
        <a href="https://twitter.com/Tech_Kazu" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}><Button color="inherit" variant="outlined">カズ之助のTwitterにいく</Button></a>
      </Toolbar>
    </AppBar>
  )
}