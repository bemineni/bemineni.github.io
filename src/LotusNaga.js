import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import GitHubIcon from "@material-ui/icons/GitHub";
import Highlight from "react-highlight";

// Set JQuery
import jquery from "jquery";
window.$ = window.jQuery = jquery;

import theme from "./Theme";
import { Container, Button, Grid } from "@material-ui/core";
require("../lotus-naga/src/naga");

const useStyle = makeStyles((theme) => ({
  dividerColor: {
    backgroundColor: "#4e4e50",
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

function LotusNaga() {
  const classes = useStyle();
  const lnref = React.createRef();

  useEffect(() => {
    $(lnref.current).naga({ width: 500, height: 500 });
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lotus Naga
      </Typography>
      <Divider className={classes.dividerColor} />
      <Typography variant="body1" paragraph>
        I still have memories of playing this game in college backbenches. I never thought of developing this game until
        last week. It took me two days and just 400 lines of code to write the whole game using HTML
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Settings
      </Typography>
      <ul>
        <li>refresh_interval - Increases the speed [600]</li>
        <li>num_unit_matrix - The snake screen matrix [50]</li>
        <li>width - The snake screen matrix [500]</li>
        <li>height - The snake screen matrix [500]</li>
      </ul>
      <Typography>
        Code on GitHub
        <IconButton
          aria-label="Github"
          component="span"
          className={classes.iconRoot}
          onClick={() => {
            location.href = "https://github.com/bemineni/lotus-naga";
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
        {`//Install and set jQuery
//npm install --save jquery
import jquery from "jquery";
window.$ = window.jQuery = jquery;

//Use require instead of import
require("../lotus-naga/src/naga");


function Component1() {
  const lnref = React.createRef();
  useEffect(() => {
    $(lnref.current).naga({ width: 500, height: 500 });
  });

  return (
    <div id="naga-game" ref={lnref}></div>
    </div>
  );
}`}
      </Highlight>
      <Typography variant="body1" gutterBottom>
        HTML
      </Typography>
      <Highlight language="javascript">
        {`<div id="naga-game">
</div>`}
      </Highlight>
      <Typography variant="body1" gutterBottom>
        jQuery Plugin usage
      </Typography>
      <Highlight language="javascript">{`$('#naga-game').naga({'width':500, 'height':500});`}</Highlight>
      <Typography variant="h5" gutterBottom>
        Demo
      </Typography>
      <Divider className={classes.dividerColor} />
      <div id="naga-game" ref={lnref}></div>
    </div>
  );
}

export default LotusNaga;
