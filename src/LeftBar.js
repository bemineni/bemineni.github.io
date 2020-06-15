import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    root:{
        background: 'white',
        position: '-webkit-sticky',
        position: 'sticky',
        top: 32,
        zIndex: 5,
        height:"100vh"
    }
  })

function LeftBar() {
    const classes = useStyle()
    return (
        <Box className={classes.root}>
                
        </Box>
    );
  }
  
  export default LeftBar;