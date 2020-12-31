import React from "react";
import {
  Typography,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import BarChartTwoToneIcon from "@material-ui/icons/BarChartTwoTone";
import { drawerWidth, colorScheme } from "theme";
import { useSelector } from "react-redux";
import { selectContestData, selectUserInfo, selectQuestionMap } from "reducers/slices/FetchedDataSlice";
import getContestStats from "utils/getContestStats";
import getQuestionStats from "utils/getQuestionStats";
import { URL } from "API";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    displayImage: {
      margin: "2rem 0 0.5rem 0 ",
      width: "150px",
      height: "150px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "5rem",
    },
    ratingStyling: {
      textTransform: "capitalize",
      fontWeight: 700,
    },
    footer: {
      position: "fixed",
      bottom: "0",
      right: "0",
      width: drawerWidth,
      "& a": {
        color: "rgb(255, 255, 255, 0.6)",
      },
      padding: "1rem",
      fontSize: "12px",
      textAlign: "center",
      backgroundColor: "#3a3939",
      color: "rgb(255, 255, 255, 0.6)",
    },
  })
);
const SideBar = () => {
  const classes = useStyles();
  const userInfo = useSelector(selectUserInfo);
  const constestInfo = useSelector(selectContestData);
  const questionMap = useSelector(selectQuestionMap);
  const contestStats = getContestStats(constestInfo);
  const questionStats = getQuestionStats(questionMap);
  return (
    <div className={classes.root}>
      <img
        alt="profile_picture"
        src={userInfo.avatar}
        className={classes.displayImage}
        style={{ border: `6px solid ${colorScheme[userInfo.rank]}` }}
      ></img>
      <Typography variant="h6" align="center" style={{ display: userInfo.firstName ? "block" : "none" }}>
        {`${userInfo.firstName}  ${userInfo.lastName}`}
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
        {`@${userInfo.handle}`}
      </Typography>
      <div style={{ borderLeft: `4px solid ${colorScheme[userInfo.rank]}` }}>
        <Typography variant="h1" align="center" className={classes.ratingStyling}>
          {userInfo.rating}
        </Typography>
        <Typography
          className={classes.ratingStyling}
          variant="h6"
          align="center"
          style={{ marginBottom: "1rem", color: colorScheme[userInfo.rank] }}
        >
          {userInfo.rank}
        </Typography>
      </div>
      <Divider />
      <Grid container style={{ paddingTop: "0rem " }}>
        <Grid item style={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)" }} xs={6}>
          <Typography variant="h6" align="center">
            Contest
          </Typography>
          <Typography variant="h6" align="center">
            {contestStats["Contest Given"]}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" align="center">
            Question
          </Typography>
          <Typography variant="h6" align="center">
            {questionStats.QuestionsSolved}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem button component="a" href={`${URL}/profile/${userInfo.handle}`} target="_blank">
          <ListItemIcon>
            <BarChartTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Codeforces Handle" />
        </ListItem>
        <ListItem button component="a" href={`https://codeforces.com/blog/entry/86167`} target="_blank">
          <ListItemIcon>
            <BookmarksOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Codeforce Blog" />
        </ListItem>
      </List>
      <Divider />
      <div className={classes.footer}>
        Made with &#9829; by Rishabh Malhotra{"  "}•{"  "}
        <a href="https://github.com/Rishabh-malhotraa/codeforces-diary" target="__blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default SideBar;
