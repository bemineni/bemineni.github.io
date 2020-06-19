import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Lotus from "./assets/icon.png";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { titlebarHeight } from "./siteDefaults";

const useStyle = makeStyles({
  groot: { backgroundColor: "#323233", height: titlebarHeight },
  gmenuRoot: {
    paddingLeft: "5px",
  },
  menuItem: {
    paddingRight: "15px",
    color: "#AEB4A7",
  },
  lotusItem: {
    display: "block",
    marginLeft: "10px",
    marginRight: "10px",
    width: "20px",
    height: "20px",
  },
  controls: {
    paddingRight: "10px",
  },
});

function TitleBar() {
  const classes = useStyle();
  return (
    <AppBar position="sticky" elevation={0}>
      <Grid container className={classes.groot} alignItems="center" wrap="nowrap">
        <Grid item>
          <img className={classes.lotusItem} src={Lotus} alt="Lotus" />
        </Grid>
        <Grid item xs={6}>
          <Grid container className={classes.gmenuRoot}>
            <Grid item component="span" className={classes.menuItem}>
              File
            </Grid>
            <Grid item component="span" className={classes.menuItem}>
              Edit
            </Grid>
            <Grid item component="span" className={classes.menuItem}>
              View
            </Grid>
            <Grid item component="span" className={classes.menuItem}>
              Run
            </Grid>
            <Grid item component="span" className={classes.menuItem}>
              Help
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          /home/Srikanth_Bemineni.pro - bemineni.github.io
        </Grid>
        <Grid item xs={2}>
          <Grid container justify="flex-end" className={classes.controls}>
            <Brightness1Icon style={{ display: "inline-block", color: "#f8544a", fontSize: 18 }} />
            <Brightness1Icon style={{ display: "inline-block", color: "#f6b73e", fontSize: 18 }} />
            <Brightness1Icon style={{ display: "inline-block", color: "#32c246", fontSize: 18 }} />
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default TitleBar;
