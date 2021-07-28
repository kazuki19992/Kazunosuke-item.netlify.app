import React from 'react'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          あいてむカズ之助
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}