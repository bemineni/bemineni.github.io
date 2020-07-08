import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ProfilePNG from "./assets/profile.png";
import Paper from "@material-ui/core/Paper";
import { Grid, TableCell, Divider } from "@material-ui/core";
import { shadows } from "@material-ui/system";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const resume = [
  {
    companyName: "Hewlett Packard Enterprise",
    projectName: "",
    projectDescription: "Provide custom OEM solution to HPE OEM customers. ",
    companyDescription:
      "HPE is an American multinational enterprise information technology company based in San Jose, California. HPE business is focused on servers, storage, networking, consulting, and support.",
    dateFrom: "June 2019",
    dateTo: "till date",
    role: "Solution Architect",
    tasks: [
      "Provide custom solutions with HPE ProLiant servers for OEM customers. The server and its related hardware and customized software are sold to the customers without any HPE branding or with OEM branding.",
      "Studying customer RFP’s requests and building custom solution proposals.",
      "Work with engineering teams to bring in new hardware when we don’t have a product similar to our competition",
      "Give customer onboarding presentations and guide them technically to implement their ISV or solution on HPE platforms.",
      "Provide Converged infrastructure solutions with HPE Synergy, and Hyper-Converged Infrastructure solutions with Nutanix based HPE Proliant DX and Simplivity servers. HCI solutions also included software-defined networking based on HPE composable fabric or VMware NSX-T.",
      "I lead a team of 5 developers to modify HPE proprietary software for OEM customer needs. This includes custom functionality and changing the design on top of HPE functionality to suit OEM customer needs.",
      "I have worked with customers to resolve their HPE technical and design issues and foster relationships.",
      "I worked with engineering teams at HPE to guide future server design to suit customer needs. One of the recommendations from me was to design future servers with OCP3 based connectors and 3G LTE/Wifi support in HPE IoT centric EdgelLine servers.",
      "I have worked on providing software-defined storage platforms solutions with vSAN and Ceph.",
      "OEM team representative for Infrastructure as a Service(HPE GreenLake) panel.",
      "I worked with many OTT media platforms, Healthcare, Telcom, Data backup, Aerospace electronics, Cloud service providers, and Industrial automation equipment providing customers.",
    ],
  },
  {
    companyName: "Hewlett Packard Enterprise",
    projectName: "",
    projectDescription:
      "Smart Update Manager is Firmware and software update toolset used to update on HPE Proliant and Apollo servers with the latest released Firmware and Software.",
    companyDescription:
      "HPE is an American multinational enterprise information technology company based in San Jose, California. HPE business is focused on servers, storage, networking, consulting, and support.",
    dateFrom: "October 2016",
    dateTo: "June 2019",
    role: "Product Architect",
    tasks: [
      "Architected the implemented Smart update manager technology in vCenter 7.0.",
      "I gave presentations on Smart Update technology to HPE customers/ambassadors. Interacted with customers to suggest suitable life cycle management solution to update HPE servers in their factories and at the field, once its deployed",
      "I designed the new online RestFul based Firmware and Software pull module(RepoServer) built on top of the Smart update dependency engine using React HPE Grommet v2, Flask, CouchDB, and Redis(Celery).",
      "The new module was integrated into many of HPE management applications like Oneview, iLO amplifier pack, and in VMware vCenter as an HPE plugin.",
      "I worked with the VMware vCenter design team to build the Hardware Support Manager(built with RepoServer), which integrates into vCenter 7.0 as a plugin. VMware customers can update HPE servers from vCenter.",
      "Designed iLO federation based update in Smart update tool. It is a swarm-based update; inject updates onto one system in the group, and it infects the update onto its neighboring system in the same group.",
      "Architected iLO(BMC) based firmware update solutions on HPE Gen10 platforms.",
      "Designed support for VMware ESXi using WBEM and HPE VMware providers.",
      "I am a member of DMTF Host interface TF from HPE.",
      "Execution of FIPS 140 compliant security certification in smart update tools.",
      "I was awarded the Volume impact champion for showing outstanding customer commitment in 2019. Helped change customer opinion on HPE products by resolving their issues, which resulted in a 4M multiyear contract.",
    ],
  },
  {
    companyName: "Hewlett Packard Enterprise",
    projectName: "Smart Update Manager and tools",
    projectDescription:
      "Smart Update Manager is Firmware and software update toolset used to update on HPE Proliant and Apollo servers with the latest released Firmware and Software.",
    companyDescription:
      "HPE is an American multinational enterprise information technology company based in San Jose, California. HPE business is focused on servers, storage, networking, consulting, and support.",
    dateFrom: "January 2011",
    dateTo: "October 2016",
    role: "Product Lead",
    tasks: [
      "Managed a team of 17 members in Houston and Bangalore",
      "Redesigned Smart update manager from a QT based desktop application tool to a RestFul based JQuery/HTML5 GUI in 2012.",
      "I implemented most of the new GUI and a robust dependency engine in the newly redesigned application.",
      "Implemented a lightweight SQLite based ORM library in C++ used still in many products at HPE",
      "Lead the team to develop Linux RHEL and SLES support in Smart update tools.",
    ],
  },
  {
    companyName: "Kforce Technologies Tampa Florida",
    projectName: "Smart Update Manager and tools",
    projectDescription:
      "Smart Update Manager is Firmware and software update toolset used to update on HPE Proliant and Apollo servers with the latest released Firmware and Software.",
    companyDescription: "Staffing and consulting company",
    dateFrom: "August 2008",
    dateTo: "January 2011",
    role: "Senior System Software Engineer – Client - Hewlett Packard",
    tasks: [
      "Analyzed and designed HP ProLiant server cross-platform system utilities including system drivers, network devices, and firmware components.",
      "Developed Smart update tools  feature to update Onboard Administrator, Virtual Connect and iLO on a C7000 enclosure",
      "Enhance performance by optimally using QT features in Smart Update Manager",
      "Report generation features in smart update tools, used by field and customers to triage their data centers",
      "New logging feature with GUI, which reports any problems in realtime during the FW/SW update process.",
    ],
  },
  {
    companyName: "Wipro Technologies",
    projectName: "Smart Update Manager and tools",
    projectDescription:
      "Diamond Seismic Processing Toolset was an upgrade of their old Fortran seismic processing toolset called Anser.",
    companyDescription:
      "Wipro is an Indian multinational corporation that provides information technology, consulting, and business process services.",
    dateFrom: "November 2006",
    dateTo: "August 2008",
    role: "Senior Software Engineer – Client GeoTrace",
    tasks: [
      "I was the Lead developer upgrading their Fortran based Seismic processing toolset to QT in C++.",
      "I developed a tool to read their design template called cards and generate the stub QT UI forms and backend code, which reduced the migration time of all the toolset by 50%.",
      "I designed custom UI widgets in QT for better data input and visualization for Geophysicists.",
      "I coordinated with the client and India development team.",
      "Created a portal for Geophysicists to submit their job flow using the new toolset, which would be queued up in the backend, and would be complete in grid cluster when resources are available.",
    ],
  },
  {
    companyName: "Wipro Technologies",
    projectName: "High available MySQL cluster on Amazon Electric cloud",
    projectDescription:
      "Deploy a resilient High available MySQL cluster on Amazon Electric cloud. One of the first to gets hands-on amazon EC2 beta program.",
    companyDescription:
      "Wipro is an Indian multinational corporation that provides information technology, consulting, and business process services.",
    dateFrom: "November 2006",
    dateTo: "August 2008",
    role: "Senior Software Engineer – Client British Petroleum",
    tasks: [
      "Created Fedora Core AMI Images on Amazon Electric Cloud with pre-installed MySQL node components",
      "I developed an LVS Linux image for load balancing between the servers using Ultra Monkey.",
      "A Java-based node monitoring tool was developed to restart the failed nodes and also report the health of the cluster to the user.",
      "Paper presented by my lead in 2007, after I moved to the US for GeoTrace assignment.http://conferences.oreillynet.com/cs/mysqluc2007/view/e_sess/14482",
    ],
  },
  {
    companyName: "Wipro Technologies",
    projectName: "Grid computing Center of excellence POC",
    projectDescription:
      "Reducing the compile time of large development projects using Condor (http://research.cs.wisc.edu/htcondor/) Grid middleware",
    companyDescription:
      "Wipro is an Indian multinational corporation that provides information technology, consulting, and business process services.",
    dateFrom: "December 2005",
    dateTo: "August 2006",
    role: "Senior Software Engineer – Grid computing Center of excellence POC",
    tasks: [
      "Implemented a tool that analyzes the make/project files and creates a DAG(Directed acyclic graph) and creates sub-job files for each segment.",
      "Came up with automated scripts/tools which prepared the participating system with all the tools required and join the system to grid pool.",
      "Showcased to Wipro customers and was implemented at one of the Wipro’s customer Alcatel to improve their development efficiency",
    ],
  },
  {
    companyName: "Wipro Technologies",
    projectName: "Open system Managment",
    projectDescription:
      "OSM was a serviceability and manageability application for NonStop S- series servers. HP NonStop Open System Management was based o DMTF Common Interface Model (CIM) model.",
    companyDescription:
      "Wipro is an Indian multinational corporation that provides information technology, consulting, and business process services.",
    dateFrom: "October 2003",
    dateTo: "December 2005",
    role: "Software Engineer – Client HP Open system Management",
    tasks: [
      "Worked on evaluating the system to identify potential problems, automates service calls from the application",
      "Worked on supporting Yosemite Intel hardware",
      "New member training",
      "Driver interfaces for new hardware",
    ],
  },
];

const skills = [
  {
    skill: "Programming Languages",
    description: "C, C++, Java, Python",
  },
  {
    skill: "Web",
    description: "HTML5, CSS3, SASS, Compass",
  },
  {
    skill: "Scripting languages",
    description: "JavaScript, Python, Shell scripting and Windows BAT scripting",
  },
  {
    skill: "Operating Systems",
    description: "Linux (RHEL, SUSE, Ubuntu and my favorite Mint), OS X, UNIX, Windows",
  },
  {
    skill: "VCS Tools ",
    description: "Git and SVN",
  },
  {
    skill: "SDK’s / Frameworks/libraries",
    description: "STL, QT C++ SDK from Digia, React, Grommet, Material UI, Flask, Pyramid, Celery, SQLAlchemy",
  },
  {
    skill: "IDE",
    description: "Vim, Sublime, Visual Studio Code, and Eclipse.",
  },
  {
    skill: "Search Engine",
    description: "Elastic Search",
  },
  {
    skill: "In-Memory database",
    description: "RocksDB and Redis",
  },
  {
    skill: "Database",
    description: "MongoDB and CouchDB",
  },
  {
    skill: "NoSQL",
    description: "SQLite and MySQL",
  },
  {
    skill: "Cloud Platform",
    description: "AWS and GCP",
  },
];

const StyledTableCell = withStyles((theme) => ({
  root: {
    borderBottomColor: "#292d3e",
  },
  head: {
    color: theme.palette.common.white,
    fontWeight: "700",
  },
  body: {
    color: theme.palette.common.white,
  },
}))(TableCell);

const useStyle = makeStyles((theme) => ({
  dividerColor: {
    backgroundColor: "#222222",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  nameLabel: {
    wordSpacing: "4px",
  },
  profile: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  paperRight: {
    textAlign: "left",
    padding: "1%",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  paperLeft: {
    textAlign: "left",
    padding: "1%",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  table: {
    backgroundColor: "#292d3e",
    color: "#ffffff",
  },
}));

function ReadMe() {
  const classes = useStyle();

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Grid container justify="center" direction="column" className={classes.tile}>
            <Typography variant="h4" className={classes.nameLabel}>
              <Box letterSpacing={3} m={1} fontWeight="fontWeightBold">
                Srikanth Bemineni
              </Box>
            </Typography>
            <Typography variant="h6" className={classes.nameLabel}>
              <Box ml={1}>srikanth.bemineni@gmail.com</Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" alignItems="center" className={classes.tile}>
            <Avatar alt="Srikanth Bemineni" src={ProfilePNG} className={classes.profile} />
          </Grid>
        </Grid>
      </Grid>

      <Divider className={classes.dividerColor} />

      <Typography variant="h5" className={classes.nameLabel}>
        <Box m={1} lineHeight={2} fontWeight="fontWeightBold">
          Education and skills
        </Box>
      </Typography>

      <Typography variant="subtitle1">
        <Box mb={1} ml={1} lineHeight={2}>
          Bachelor of Engineering (Computer Science). Visveshwariah Technological University Belgaum KA
        </Box>
      </Typography>
      <Typography variant="subtitle1">
        <Box mb={1} ml={1} lineHeight={2}>
          Qt certification from ICS (Integrated Computer Solutions), Hewlett Packard, 2010
        </Box>
      </Typography>
      <Typography variant="subtitle1">
        <Box mb={1} ml={1} lineHeight={2}>
          HPE Leadership development program a one-year internal Hewlett Packard course. June 2020
        </Box>
      </Typography>
      <Typography variant="subtitle1">
        <Box mb={3} ml={1} lineHeight={2}>
          Docker and Kubernetes course on Udemy
        </Box>
      </Typography>

      <Grid container>
        <Grid item xs={6}>
          <TableContainer component={Paper} className={classes.table} elevation={0}>
            <Table className={classes.table} aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography component="div" variant="body1">
                      <Box fontWeight="fontWeightBold">Technology</Box>
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography component="div" variant="body1">
                      <Box fontWeight="fontWeightBold">Description</Box>
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {skills.map((item, index) => (
                  <TableRow key={index}>
                    <StyledTableCell component="th">
                      <Typography component="div" variant="body1">
                        <Box fontWeight="fontWeightRegular">{item.skill}</Box>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography component="div" variant="body1">
                        <Box fontWeight="fontWeightRegular">{item.description}</Box>
                      </Typography>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Divider className={classes.dividerColor} />

      <Timeline align="alternate">
        {resume.map((item, idx1) => (
          <TimelineItem key={idx1}>
            <TimelineOppositeContent>
              <Paper elevation={3} className={classes.paperRight}>
                <Typography component="div" variant="body1">
                  <Box fontWeight="fontWeightBold">{item.role}</Box>
                </Typography>
                <Typography component="div" variant="body1">
                  <Box fontWeight="fontWeightRegular">{item.companyName}</Box>
                </Typography>
                <Typography component="div" variant="body1">
                  <Box fontWeight="fontWeightRegular">{item.companyDescription}</Box>
                </Typography>
                <Typography component="div" variant="body1">
                  <Box fontWeight="fontWeightBold" mt={1}>
                    {item.dateFrom} - {item.dateTo}
                  </Box>
                </Typography>
              </Paper>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <AccessTimeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paperLeft}>
                <Typography className={classes.title} component="div" variant="body1">
                  <Box>{item.projectDescription}</Box>
                </Typography>
                <div className={classes.demo}>
                  <List dense={true}>
                    {item.tasks.map((item1, idx2) => (
                      <ListItem key={idx2} alignItems="flex-start" disableGutters={true} dense={true}>
                        <ListItemIcon>
                          <ArrowForwardIosIcon fontSize="small" style={{ color: "#ffffff" }} />
                        </ListItemIcon>
                        <ListItemText primary={<Box>{item1}</Box>} primaryTypographyProps={{ variant: "body1" }} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Divider className={classes.dividerColor} />

      <Typography component="div">
        <Box fontWeight={700}>Patent-pending</Box>
      </Typography>
      <Typography>
        SELECTING AND SENDING SUBSET OF COMPONENTS TO COMPUTING DEVICE PRIOR TO OPERATING SYSTEM INSTALL
      </Typography>
      <Divider className={classes.dividerColor} />
    </div>
  );
}

export default ReadMe;
