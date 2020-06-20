import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { statusbarHeight, LeftbarWidth, titlebarHeight } from "./siteDefaults";
import TitleBar from "./TitleBar";
import StatusBar from "./StatusBar";
import LeftBar from "./LeftBar";
import LotusImageCrop from "./LotusImageCrop";
import LotusNaga from "./LotusNaga";
import LotusSelect from "./LotusSelect";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    color: "#ebebeb",
    height: "100vh",
  },
  rightRoot: {
    backgroundColor: "#1e1e1e",
    color: "#ebebeb",
    marginTop: titlebarHeight,
    marginLeft: LeftbarWidth,
    marginBottom: statusbarHeight,
    padding: "1%",
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
        <LotusSelect />
      </Box>
      <StatusBar />
    </Container>
  );
}

export default Project;
