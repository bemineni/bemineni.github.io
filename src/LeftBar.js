import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { titlebarHeight, statusbarHeight, LeftbarWidth } from "./siteDefaults";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SearchIcon from "@material-ui/icons/Search";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import BugReportIcon from "@material-ui/icons/BugReport";
import WidgetsIcon from "@material-ui/icons/Widgets";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import BTreeView from "./BTreeView";

const useStyle = makeStyles({
  root: {
    position: "fixed",
    backgroundColor: "#252526",
    color: "black",
    height: `calc(100% - ${titlebarHeight} - ${statusbarHeight})`,
    top: titlebarHeight,
    left: 0,
    width: LeftbarWidth,
  },
  flexContainerRoot: {
    height: "100%",
  },
  toolBarRoot: {
    width: "12%",
    maxWidth: "12%",
    height: "100%",
    backgroundColor: "#333333",
    padding: "2%",
  },
  iconRoot: {
    display: "block",
    fontSize: "2em",
    color: "#858585",
    marginBottom: "70%",
  },
  treeRoot: {
    minWidth: "88%",
  },
});

const LeftBar = (props) => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box display="flex" className={classes.flexContainerRoot}>
        <Box className={classes.toolBarRoot}>
          <LibraryBooksIcon className={classes.iconRoot} />
          <SearchIcon className={classes.iconRoot} />
          <DeviceHubIcon className={classes.iconRoot} />
          <BugReportIcon className={classes.iconRoot} />
          <WidgetsIcon className={classes.iconRoot} />
          <SlideshowIcon className={classes.iconRoot} />
        </Box>
        <Box className={classes.treeRoot}>
          <BTreeView url={props.url} />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftBar;
