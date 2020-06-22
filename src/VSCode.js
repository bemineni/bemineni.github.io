import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { statusbarHeight, LeftbarWidth, titlebarHeight, getComponent, tabbarHeight } from "./siteDefaults";
import TitleBar from "./TitleBar";
import StatusBar from "./StatusBar";
import LeftBar from "./LeftBar";
import TabBar from "./TabBar";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    color: "#ebebeb",
    height: "100vh",
  },
  rightRoot: {
    backgroundColor: "#1e1e1e",
    color: "#ebebeb",
    marginTop: `calc(${titlebarHeight} + ${tabbarHeight})`,
    marginLeft: LeftbarWidth,
    marginBottom: statusbarHeight,
    padding: "1%",
    minHeight: "100%",
  },
}));

function VSCode({ match }) {
  const classes = useStyle();
  const Comp = getComponent(match.url);

  return (
    <Container className={classes.root} maxWidth={false}>
      <TitleBar />
      <LeftBar url={match.url} />
      <TabBar url={match.url} />
      <Box className={classes.rightRoot}>
        <Comp />
      </Box>
      <StatusBar />
    </Container>
  );
}

export default VSCode;
