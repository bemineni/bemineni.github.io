import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Highlight from "react-highlight";

// Set JQuery
import jquery from "jquery";
window.$ = window.jQuery = jquery;

import "../lotus-select/stylesheets/lotusselect.css";
require("../lotus-select/src/lotusselect.js");

const useStyle = makeStyles((theme) => ({
  dividerColor: {
    backgroundColor: theme.palette.dividerColor.main,
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

function LotusSelect() {
  const classes = useStyle();
  const lsref = React.createRef();

  useEffect(() => {
    $(lsref.current).lotusSelect();
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lotus Select
      </Typography>
      <Divider className={classes.dividerColor} />
      <Typography variant="body1" paragraph>
        Lotus select is a nice replacement for the html select. It adds some benefits over the regular select element.
      </Typography>
      <ul>
        <li>
          One thing that I always hated with select was the space. It always takes longest element space on the
          document. With this new select plugin the space is restricted to the option item that is displayed.
        </li>
        <li>We have lot of options to change the settings.</li>
        <li>User can search through the list of options.</li>
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
      <Highlight language="javascript">{`$('#cars').lotusSelect();`}</Highlight>
      <Typography variant="h5" gutterBottom>
        Demo
      </Typography>
      <Divider className={classes.dividerColor} />
      <div style={{ color: "#000000" }}>
        <select ref={lsref} id="cars">
          <option>Audi R8</option>
          <option>Audi TT</option>
          <option>Chrysler Crossfire</option>
          <option>Chevrolet Corvette</option>
          <option>Ferrari 125 S</option>
          <option>Ferrari 195 S</option>
          <option>Ferrari Enzo</option>
          <option>Lotus Elise</option>
          <option>Ford Shelby Cobra GT500</option>
          <option>Subaru Impreza STi</option>
          <option>Porsche 911</option>
          <option>Pagani Zonda C12 S</option>
          <option>Nissan Skyline GT-R</option>
          <option>Mitsubishi Lancer Evo VIII</option>
          <option>Aston Martin DB4 GT Zagato</option>
          <option>BMW M3 GTR</option>
          <option>Jaguar E-type Series 1</option>
          <option>Mercedes-Benz SLR McLaren</option>
          <option>Ferrari F40</option>
          <option>Lamborghini Diablo</option>
          <option>Dodge Viper GTS</option>
          <option>Bugatti Veyron</option>
          <option>Porsche Carrera GT</option>
          <option>Ferrari 250 GTO</option>
        </select>
      </div>
      <div style={{ marginBottom: "50%" }}></div>
    </div>
  );
}

export default LotusSelect;
