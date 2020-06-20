import React, { useEffect } from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import Highlight from "react-highlight";

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
  iconRoot: {
    color: "#ffffff",
  },
  root: {
    marginBottom: "5%",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  gridRoot: {
    marginTop: "2%",
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
      <Typography>
        Code on GitHub
        <IconButton
          aria-label="Github"
          component="span"
          className={classes.iconRoot}
          onClick={() => {
            location.href = "https://github.com/bemineni/lotus-imagecrop";
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Typography>

      <Typography variant="h5" gutterBottom>
        How to use it?
      </Typography>
      <Divider className={classes.dividerColor} />
      <Typography variant="body1" gutterBottom>
        Using it in a React application
      </Typography>
      <Highlight language="javascript">
        {` function Component1() {
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
  // Attach this handler to a button onClick={() => zoomHandler(false/true)}
  function zoomHandler(upordown) {
    if (upordown) {
      $(liref.current).lotusImageCrop("increaseZoom");
    } else {
      $(liref.current).lotusImageCrop("decreaseZoom");
    }
  }

  return (
    <div
      className="lotus-image-container"
      style={{ height: "500px", width: "100%" }}
      data-src="https://d1u1mce87gyfbn.cloudfront.net/media/artwork/genji-concept.jpg"
      data-clip-height="320"
      data-clip-width="320"
      data-zoom="100"
      ref={liref}
    ></div>
  );
}`}
      </Highlight>
      <Typography variant="body1" gutterBottom>
        HTML
      </Typography>
      <Highlight language="javascript">
        {`<div class="lotus-image-container" 
        style="height:500px; width:100%;" 
        data-src="https://d1u1mce87gyfbn.cloudfront.net/media/artwork/genji-concept.jpg" 
        data-clip-height="320"
        data-clip-width="320" 
        data-zoom="100">`}
      </Highlight>
      <Typography variant="body1" gutterBottom>
        jQuery Plugin usage
      </Typography>
      <Highlight language="javascript">
        {`$(".lotus-image-container").lotusImageCrop({'onchange': function(top,left,zoom,width,height){
          $("#x-position").val(left.toString())
          $("#y-position").val(top.toString())
          $('#zoom').val(zoom)
    }})

    $("#increase").on('click',function(e){
        $(".lotus-image-container").lotusImageCrop('increaseZoom')
        e.preventDefault();
    })

    $("#decrease").on('click',function(e){
        $(".lotus-image-container").lotusImageCrop('decreaseZoom')
        e.preventDefault();
        })`}
      </Highlight>
      <Typography variant="h5" gutterBottom>
        Demo
      </Typography>
      <Divider className={classes.dividerColor} />
      <Grid container spacing={2} className={classes.gridRoot}>
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
