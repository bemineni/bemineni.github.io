import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ProfilePNG from "./assets/profile.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box, Link, Divider, Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import ElasticSearchPNG from "./assets/elasticsearch.png";
import JavascriptPNG from "./assets/Javascript.png";

const useStyle = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  tile: {
    height: theme.spacing(40),
  },
  tileContent: {
    height: "100%",
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  link: {
    display: "flex",
    color: "#e2e2e2",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  dividerColor: {
    backgroundColor: theme.palette.dividerColor.main,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  image: {
    height: "100%",
    width: theme.spacing(40),
  },
}));

function IndexHTML() {
  const label = "<Index/>";

  const classes = useStyle();
  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" alignItems="center" className={classes.tile}>
            <Avatar alt="Srikanth Bemineni" src={ProfilePNG} className={classes.large} />
          </Grid>
          {/* Content end*/}
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="flex-start" className={classes.tile}>
            <Box className={classes.tileContent} borderRadius={3} style={{ backgroundColor: "#1b1e2b" }}>
              <Typography variant="h5"> Srikanth Bemineni </Typography>
              <Box mt={1}>
                <Typography variant="body1">
                  Architect and Cloud Enthusiast working in the industry for past 2 decades.{" "}
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1">
                  <Link className={classes.link} href="#/readme">
                    <DescriptionIcon className={classes.icon} /> Checkout my resume
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Content end*/}
        </Grid>
      </Grid>

      <Divider className={classes.dividerColor} />

      <Grid container alignItems="center">
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" alignItems="center" className={classes.tile}>
            <Box className={classes.tileContent} borderRadius={3}>
              <Typography variant="h5"> Eldam Elasticsearch data manager </Typography>
              <Box mt={1}>
                <Typography variant="body1">Elastic search datamanger with zope transaction support</Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1">
                  <Button variant="contained" color="primary">
                    <Link className={classes.link} href="#/src/eldam">
                      Learn more
                    </Link>
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Content end*/}
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" className={classes.tile}>
            <img src={ElasticSearchPNG} className={classes.image} />
          </Grid>
          {/* Content end*/}
        </Grid>
      </Grid>

      <Divider className={classes.dividerColor} />

      <Grid container alignItems="center">
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" className={classes.tile}>
            <img src={JavascriptPNG} className={classes.image} />
          </Grid>
          {/* Content end*/}
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" alignItems="center" className={classes.tile}>
            <Box className={classes.tileContent} borderRadius={3}>
              <Typography variant="h5"> Lotus Select Nice HTML select replacement </Typography>
              <Box mt={1}>
                <Typography variant="body1">
                  Lotus select is a nice replacement for the html select. It adds some small benefits over the select
                  element.
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1">
                  <Button variant="contained" color="primary">
                    <Link className={classes.link} href="#/src/lotus-select">
                      Learn more
                    </Link>
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Content end*/}
        </Grid>
      </Grid>

      <Divider className={classes.dividerColor} />

      <Grid container alignItems="center">
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" alignItems="center" className={classes.tile}>
            <Box className={classes.tileContent} borderRadius={3}>
              <Typography variant="h5">Lotus Image crop Visual image crop tool</Typography>
              <Box mt={1}>
                <Typography variant="body1">
                  Visual image crop javascript plugin. User crop selection can later be used to crop the image using any
                  image procressing library
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1">
                  <Button variant="contained" color="primary">
                    <Link className={classes.link} href="#/src/lotus-image-crop">
                      Learn more
                    </Link>
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Content end*/}
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" className={classes.tile}>
            <img src={JavascriptPNG} className={classes.image} />
          </Grid>
          {/* Content end*/}
        </Grid>
      </Grid>

      <Divider className={classes.dividerColor} />

      <Grid container alignItems="center">
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" className={classes.tile}>
            <img src={JavascriptPNG} className={classes.image} />
          </Grid>
          {/* Content end*/}
        </Grid>
        <Grid item xs={6} style={{ height: "100%" }}>
          {/* Content */}
          <Grid container justify="center" alignItems="center" className={classes.tile}>
            <Box className={classes.tileContent} borderRadius={3}>
              <Typography variant="h5"> Lotus Naga Classic snake game</Typography>
              <Box mt={1}>
                <Typography variant="body1">Snake game developed using HTML canvas and Javascript.</Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1">
                  <Button variant="contained" color="primary">
                    <Link className={classes.link} href="#/src/lotus-naga">
                      Learn more
                    </Link>
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Content end*/}
        </Grid>
      </Grid>
    </div>
  );
}

export default IndexHTML;
