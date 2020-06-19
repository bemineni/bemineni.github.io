import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { statusbarHeight, LeftbarWidth } from "./siteDefaults";
import TitleBar from "./TitleBar";
import StatusBar from "./StatusBar";
import LeftBar from "./LeftBar";
import LotusImageCrop from "./LotusImageCrop";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    color: "#ebebeb",
    height: "100vh",
  },
  rightRoot: {
    backgroundColor: "#1e1e1e",
    color: "#ebebeb",
    marginLeft: LeftbarWidth,
    marginBottom: statusbarHeight,
    paddingTop: "1%",
    paddingLeft: "1%",
    paddingRight: "1%",
    minHeight: "100%",
  },
}));

function Project({ match }) {
  const classes = useStyle();
  return (
    <Container className={classes.root} maxWidth={false}>
      <TitleBar />
      <LeftBar option={match.params.id} />
      <Box className={classes.rightRoot}>
        <LotusImageCrop />
      </Box>
      <StatusBar />
    </Container>
  );
}

export default Project;
