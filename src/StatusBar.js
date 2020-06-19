import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import CachedIcon from "@material-ui/icons/Cached";
import CancelIcon from "@material-ui/icons/Cancel";
import WarningIcon from "@material-ui/icons/Warning";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { statusbarHeight } from "./siteDefaults";
import pkgjson from "../package.json";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://bemineni.github.io">
        bemineni.github.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyle = makeStyles({
  appbarRoot: {
    top: `calc(100vh - ${statusbarHeight})`,
    bottom: "100vh",
    height: statusbarHeight,
  },
  groot: {
    backgroundColor: "#007acc",
    height: "100%",
    paddingLeft: "1%",
    paddingRight: "1%",
  },
  gmenuRoot: {
    paddingLeft: "5px",
  },
  typoRoot: {
    fontSize: 11,
  },
});

function StatusBar() {
  const classes = useStyle();
  for (var i in process.env) {
    console.log(i);
  }
  return (
    <AppBar position="fixed" elevation={0} className={classes.appbarRoot}>
      <Grid container className={classes.groot} alignItems="center" wrap="nowrap">
        <Grid item xs={3}>
          <Grid container justify="flex-start" alignItems="center">
            <DeviceHubIcon style={{ display: "inline-block", color: "white", fontSize: 14 }} />
            <Typography variant="body1" className={classes.typoRoot}>
              v{pkgjson.version}
            </Typography>
            <CachedIcon
              style={{
                display: "inline-block",
                color: "white",
                fontSize: 14,
                marginLeft: "2%",
              }}
            />
            <CancelIcon
              style={{
                display: "inline-block",
                color: "white",
                fontSize: 14,
                marginLeft: "2%",
              }}
            />
            <Typography variant="body1" className={classes.typoRoot}>
              0
            </Typography>
            <WarningIcon style={{ display: "inline-block", color: "white", fontSize: 14 }} />
            <Typography variant="body1" className={classes.typoRoot}>
              1
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Copyright />
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-end" alignItems="center">
            <Typography variant="body1" className={classes.typoRoot}>
              Ln 108, Col 3
            </Typography>
            <Typography variant="body1" style={{ fontSize: 11, marginLeft: "2%" }}>
              Spaces:4
            </Typography>
            <Typography variant="body1" style={{ fontSize: 11, marginLeft: "2%" }}>
              UTF-8
            </Typography>
            <Typography variant="body1" style={{ fontSize: 11, marginLeft: "2%" }}>
              CRLF-8
            </Typography>
            <Typography variant="body1" style={{ fontSize: 11, marginLeft: "2%" }}>
              C++
            </Typography>
            <ChatIcon
              style={{
                display: "inline-block",
                color: "white",
                fontSize: 14,
                marginLeft: "2%",
              }}
            />
            <NotificationsNoneIcon
              style={{
                display: "inline-block",
                color: "white",
                fontSize: 14,
                marginLeft: "2%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default StatusBar;
