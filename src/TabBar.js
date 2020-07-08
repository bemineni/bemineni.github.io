import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { LeftbarWidth, tabbarHeight, titlebarHeight, getItem } from "./siteDefaults";
import UnknownPNG from "./assets/Unknown.png";

const useStyle = makeStyles((theme) => ({
  appbarRoot: {
    top: titlebarHeight,
    left: LeftbarWidth,
    height: tabbarHeight,
  },
  groot: {
    backgroundColor: "#292d3e",
    height: "100%",
    borderBottom: "1px solid #222222",
  },
  tabRoot: {
    height: "60%",
    paddingTop: "5px",
    paddingLeft: "10px",
    paddingRight: "7px",
    paddingBottom: "5px",
    borderBottom: "1px solid #80cbc4",
  },
  breadRoot: {
    height: "40%",
    marginTop: "3px",
    paddingLeft: "10px",
    paddingRight: "7px",
    borderRight: "1px solid #333333",
  },
  typoRoot: {
    fontSize: 14,
    color: "#999999",
  },
  BreadcrumbTypoRoot: {
    fontSize: 13,
    color: "#999999",
  },
  BreadcrumbItem: {
    marginLeft: "6px",
  },
  labelIcon: {
    marginRight: theme.spacing(1),
    width: "12px",
    height: "12px",
  },
}));

const TabBar = (props) => {
  const classes = useStyle();
  let url = props.url;
  if (props.url === "/") {
    url = "/public/index";
  }
  const res = url.split("/").filter(String);
  const item = getItem(url);

  let LabelIcon = UnknownPNG;
  if (item && "icon" in item) {
    LabelIcon = item.icon;
  }
  let labl = "";
  if (res.length == 1) {
    labl = res[0];
  } else if (res.length == 2 && item) {
    labl = res[1] + "." + item.type.toLowerCase();
  }

  return (
    <AppBar position="fixed" elevation={0} className={classes.appbarRoot}>
      <Grid container className={classes.groot} wrap="nowrap" direction="column">
        <Grid item xs={2} className={classes.tabRoot}>
          <Grid container wrap="nowrap" alignItems="center">
            <Grid item>
              <img src={LabelIcon} className={classes.labelIcon} />
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.typoRoot} variant="body1">
                {labl}
              </Typography>
            </Grid>
            <Grid item>
              <Brightness1Icon style={{ display: "inline-block", color: "#ffffff", fontSize: 13 }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.breadRoot}>
          <Grid container wrap="nowrap" alignContent="center">
            <Grid item>
              <Typography variant="body1" className={classes.BreadcrumbTypoRoot}>
                {res[0] + " >"}
              </Typography>
            </Grid>
            {res.length == 2 && item != null ? (
              <Grid item className={classes.BreadcrumbItem}>
                <img src={LabelIcon} className={classes.labelIcon} />
              </Grid>
            ) : (
              ""
            )}
            {res.length == 2 && item != null ? (
              <Grid item>
                <Typography variant="body1" className={classes.BreadcrumbTypoRoot}>
                  {labl}
                </Typography>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TabBar;
