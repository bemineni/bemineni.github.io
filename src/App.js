import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TitleBar from "./TitleBar";
import Box from "@material-ui/core/Box"
import { titlebarHeight } from "./siteDefaults"

import './App.css';
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://bemineni.github.io">
        bemineni.github.io
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyle = makeStyles({
  root:{ padding: 0, color:"white", height: "100vh"},
  leftroot:{ backgroundColor: "purple", color: "black", height: `calc(100% - ${titlebarHeight})`},
  rightroot:{ backgroundColor: "teal", color: "black", height: `calc(100% - ${titlebarHeight})` }
})

function App() {
  const classes = useStyle()
  return (
    <Container className={classes.root} maxWidth={false}>
        <TitleBar/>
        <Box component="div">
        </Box>
        <Copyright/>
    </Container>
  );
}

export default App;
