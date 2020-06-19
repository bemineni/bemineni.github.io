import React, { useEffect } from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

// Set JQuery
import jquery from "jquery";
window.$ = window.jQuery = jquery;

import "../lotus-imagecrop/stylesheet/lotusimagecrop.css";
import theme from "./Theme";
import { Container, Button, Grid } from "@material-ui/core";
require("../lotus-imagecrop/src/lotusimagecrop");

const useStyle = makeStyles((theme) => ({
  dividerColor: {
    backgroundColor: "#ebebeb",
    marginBottom: theme.spacing(1),
  },
  root: {
    marginBottom: "5%",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-disabled": {
      color: theme.palette.swhite.main,
    },
    "& label.Mui-focused": {
      color: theme.palette.swhite.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.swhite.main,
    },
    "& .MuiOutlinedInput-root": {
      color: theme.palette.swhite.main,
      "& fieldset": {
        borderColor: theme.palette.swhite.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.swhite.main,
      },
      "&.Mui-disabled fieldset": {
        borderColor: theme.palette.swhite.main,
      },
    },
  },
})(TextField);

function LotusImageCrop() {
  const classes = useStyle();
  const xref = React.createRef();
  const yref = React.createRef();
  const zoomref = React.createRef();
  const liref = React.createRef();

  useEffect(() => {
    $(liref.current).lotusImageCrop({
      onchange: function (top, left, zoom, width, height) {
        xref.current.value = top;
        yref.current.value = left;
        zoomref.current.value = zoom;
      },
    });
  });

  function zoomHandler(upordown) {
    if (upordown) {
      $(liref.current).lotusImageCrop("increaseZoom");
    } else {
      $(liref.current).lotusImageCrop("decreaseZoom");
    }
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lotus Image crop
      </Typography>
      <Divider className={classes.dividerColor} />
      <Typography variant="body1" paragraph>
        A jQuery plugin to crop a image visually for the user. The user selection options can be retrieved using the
        api's to be processed by any image processing tool.
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <CssTextField id="x" label="X" defaultValue="0" variant="outlined" disabled={true} inputRef={xref} />
        </Grid>
        <Grid item>
          <CssTextField id="y" label="Y" defaultValue="0" variant="outlined" disabled={true} inputRef={yref} />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: "3%" }} alignItems="center">
        <Grid item>
          <CssTextField
            id="zoom"
            label="zoom"
            defaultValue="100"
            variant="outlined"
            disabled={true}
            inputRef={zoomref}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                color="primary"
                size="large"
                onClick={() => zoomHandler(true)}
              >
                Increase
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<RemoveCircleOutlineIcon />}
                color="secondary"
                size="large"
                onClick={() => zoomHandler(false)}
              >
                Decrease
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div
        className="lotus-image-container"
        style={{ height: "500px", width: "100%" }}
        data-src="https://d1u1mce87gyfbn.cloudfront.net/media/artwork/genji-concept.jpg"
        data-clip-height="320"
        data-clip-width="320"
        data-zoom="100"
        ref={liref}
      ></div>
    </div>
  );
}

export default LotusImageCrop;
