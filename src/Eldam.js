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

function Eldam() {
  const classes = useStyle();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ELDAM
      </Typography>
      <Divider className={classes.dividerColor} />
      <Typography variant="body1" paragraph>
        Elasticsearch data manager (ELDAM) with zope transaction support. Other transaction data manager like sqlalchemy
        use the database atomic operation feature to rollback if an error occurs during the commit process. This is not
        achievable in elastic search. To overcome this eldam finalizes the records in the commit call of the two-phase
        transaction process. At the same time takes backup of the existing data in the index, if it involves removing or
        updating a record.
      </Typography>
      <Typography>
        Code on GitHub
        <IconButton
          aria-label="Github"
          component="span"
          className={classes.iconRoot}
          onClick={() => {
            location.href = "https://github.com/bemineni/eldam";
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Typography>

      <Typography variant="h5" gutterBottom>
        How to install?
      </Typography>
      <Divider className={classes.dividerColor} />
      <Typography variant="body1" gutterBottom>
        eldam is only supported on python 3.x
      </Typography>
      <Highlight language="bash">{`pip install eldam`}</Highlight>

      <Divider className={classes.dividerColor} />
    </div>
  );
}

export default Eldam;
