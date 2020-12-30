import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import logo from "./../../assets/code-forces.svg";
import peeps from "./../../assets/peep-crowd.svg";
import TextField from "@material-ui/core/TextField";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeRequest from "utils/fetchData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      backgroundColor: "#ffffff",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23edf2fb' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E\")",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    header: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      paddingTop: "1rem",
      maxHeight: "70px",
    },
    footer: {
      width: "100%",
      margin: "0px",
      "& a": {
        color: "rgb(255, 255, 255, 0.6)",
      },
      padding: "1rem",
      fontSize: "12px",
      textAlign: "center",
      backgroundColor: "#3a3939",
      color: "rgb(255, 255, 255, 0.6)",
    },
    imageWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      "& img": {
        width: "80%",
        height: "auto",
      },
    },
  })
);

interface NextButtonProps {
  handle: string;
  setErrorText: React.Dispatch<
    React.SetStateAction<{
      error: boolean;
      comment: string;
    }>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// error key to do what we don

const NextButton: React.FC<NextButtonProps> = ({ handle, setErrorText, setLoading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = async () => {
    setLoading(true);
    const response = await makeRequest(handle, dispatch, history);
    if (response !== undefined) {
      setErrorText(response);
      setLoading(false);
    }
  };

  return (
    <IconButton onClick={() => handleClick()}>
      <ArrowForwardRoundedIcon />
    </IconButton>
  );
};
const handles = ["tourist", "rishgod"];

function LandingPage() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [handle, setHandle] = useState<string>(handles[Math.floor(Math.random() * handles.length)]);
  const [errorText, setErrorText] = useState({ error: false, comment: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHandle(event.target.value as string);
  };

  return (
    <>
      <CssBaseLine />
      <Grid
        container
        direction="column"
        justify="space-between"
        className={classes.root}
        alignContent="stretch"
      >
        <Grid item container justify="center">
          <div className={classes.header}>
            <div className={classes.imageWrapper}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </Grid>
        <Grid item container justify="center">
          <div style={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Enter Codeforces Handle
            </Typography>
            <TextField
              error={errorText.error}
              helperText={errorText.comment}
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <NextButton handle={handle} setErrorText={setErrorText} setLoading={setLoading} />
                ),
              }}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(e)}
              value={handle}
            />
          </div>
        </Grid>
        <Grid container item style={{ height: "30vh" }} alignContent="flex-end">
          <div className={classes.imageWrapper}>
            <img src={peeps} alt="hero_image" />
          </div>
          <p className={classes.footer}>
            Made with &#9829; by Rishabh Malhotra{"  "}•{"  "}
            <a href="https://github.com/rishabh-malhotraa" target="__blank">
              Github
            </a>
          </p>
        </Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default LandingPage;
