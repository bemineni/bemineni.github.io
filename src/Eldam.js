import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Highlight from "react-highlight";

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

function Eldam() {
  const classes = useStyle();

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
      <Highlight language="javascript">{`$('#cars').Eldam();`}</Highlight>
      <Typography variant="h5" gutterBottom>
        Demo
      </Typography>
      <Divider className={classes.dividerColor} />
    </div>
  );
}

export default Eldam;
