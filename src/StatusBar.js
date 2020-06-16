import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { statusbarHeight } from "./siteDefaults"
import DeviceHubIcon from '@material-ui/icons/DeviceHub';


const useStyle = makeStyles({
    appbarRoot:{
        top: `calc(100vh - ${statusbarHeight})`,
        bottom:"100vh",
        height: statusbarHeight 
    },
    groot:{ 
        backgroundColor:"#007acc",
        height:"100%"
    },
    gmenuRoot:{ 
      paddingLeft:"5px"
    },
  })

function StatusBar() {
    const classes = useStyle()
    return (
        <AppBar position="fixed" elevation={0} className={classes.appbarRoot}>
            <Grid container className={classes.groot} alignItems="center" wrap="nowrap">
                <Grid item xs={6}>
                    <Grid container justify="flex-start" className={classes.controls}>
                        <Brightness1Icon style={{ display:"inline-block", color: "#f8544a" ,fontSize: 18}}/>
                        <Brightness1Icon style={{ display:"inline-block", color: "#f6b73e" ,fontSize: 18}}/>
                        <Brightness1Icon style={{ display:"inline-block", color: "#32c246" ,fontSize: 18}}/>
                    </Grid>
                </Grid>
          </Grid>
        </AppBar>
    );
  }
  
  export default StatusBar;