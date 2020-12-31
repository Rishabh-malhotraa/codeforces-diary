import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Redirect } from "react-router-dom";
import { selectApiFetched, selectSubmissionList } from "reducers/slices/FetchedDataSlice";
import CodeforcesSVG from "assets/codeforces-diary.svg";
import { drawerWidth } from "theme";
import Heatmap from "./Heatmap";
import RadarChart from "./RadarChart";
import Statistics from "./Statistics";
import DonughtChart from "./DonughtChart";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import UnsolvedQuestionsList from "./UnsolvedQuestionsList";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import BubbleChart from "./BubbleChart";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    logoImage: {
      height: "auto",
      width: "30%",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <img className={classes.logoImage} src={CodeforcesSVG} alt="codeforces_logo"></img>
            <Typography variant="h6" noWrap className={classes.title}></Typography>
            {/* <Button variant="text" color="primary" onClick={() => history.push("/resources")}>
              Resources
            </Button> */}
            <Button
              variant="text"
              color="primary"
              style={{ margin: "0rem 1rem" }}
              onClick={() => history.goBack()}
            >
              Home
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Heatmap drawerOpen={open} />
          <Grid container direction="row" justify="space-evenly" style={{ margin: "1rem 0 3rem 0" }}>
            <RadarChart />
            <DonughtChart />
          </Grid>
          {/* <BubbleChart /> */}
          <Statistics />
          <UnsolvedQuestionsList />
        </div>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          style={{ zIndex: open ? 1 : -1 }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <SideBar />
        </Drawer>
      </div>
    </>
  );
};

const DashboardWrapper = () => {
  const apiFetched = useSelector(selectApiFetched);
  const SubmissionList = useSelector(selectSubmissionList);
  return <>{apiFetched === false || SubmissionList.length === 0 ? <Redirect to="/" /> : <Dashboard />}</>;
};

export default DashboardWrapper;
