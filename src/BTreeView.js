import React, { useDebugValue } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { structure } from "./siteDefaults";
import { useHistory } from "react-router-dom";

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)",
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent",
    },
  },
  content: {
    color: "white",
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
    width: "13px",
    height: "13px",
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          {LabelIcon ? <img src={LabelIcon} className={classes.labelIcon} /> : ""}
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": "#007acc",
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const BTreeView = (props) => {
  const classes = useStyles();
  const history = useHistory();

  function onSelect(e, value) {
    history.push(value);
  }

  let url = props.url;
  if (props.url === "/") {
    url = "/public/index";
  }

  console.log("rendering");
  return (
    <TreeView
      className={classes.root}
      defaultExpanded={Object.keys(structure).map((key, index) => "/" + key)}
      defaultCollapseIcon={<KeyboardArrowDownIcon />}
      defaultExpandIcon={<KeyboardArrowRightIcon />}
      defaultEndIcon={<KeyboardArrowRightIcon />}
      multiSelect={false}
      onNodeSelect={onSelect}
      selected={[url]}
    >
      {Object.entries(structure).map(([key, value]) => {
        return (
          <StyledTreeItem key={key} nodeId={"/" + key} labelText={value.name}>
            {value.items.map((i, index) => {
              return (
                <StyledTreeItem
                  key={key + i.url}
                  nodeId={"/" + key + "/" + i.url}
                  labelText={i.name}
                  labelIcon={i.icon}
                  labelInfo={i.type}
                />
              );
            })}
          </StyledTreeItem>
        );
      })}
    </TreeView>
  );
};

export default BTreeView;
