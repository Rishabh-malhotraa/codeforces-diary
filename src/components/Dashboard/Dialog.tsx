import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { QuestionMapDateType, SubmissionType } from "types";
import dateFormat from "dateformat";
import { relativeDate } from "utils/getDate";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { red, green } from "@material-ui/core/colors";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { QUESTION_URL, GYM_QUESTION_URL } from "API";
interface AppProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dialogData: QuestionMapDateType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
      backgroundColor: "#3A3939",
      color: "whitesmoke",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const prepareURL = (question: SubmissionType) => {
  const URL = question.problem.contestId > 10000 ? GYM_QUESTION_URL : QUESTION_URL;

  const url = `${URL}/${question.problem.contestId}/${question.problem.index}`;
  return url;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const getStringFromArray = (tags: string[]) => {
  let tagString = "  ";
  tags.forEach((tag) => {
    tagString += tag + ",  ";
  });
  return tagString.slice(0, tagString.length - 3).trim();
};

const FullScreenDialog: React.FC<AppProps> = ({ open, setOpen, dialogData }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  const { date, questions } = dialogData;

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // const result = ()

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Submission List
            </Typography>
            <Typography>{dateFormat(dialogData.date, " mmmm dS, yyyy")} </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {questions.map((question, idx) => {
            const result = question.verdict === "OK" ? true : false;
            const { problem } = question;
            return (
              <React.Fragment key={idx}>
                <ListItem button component="a" target="_blank" href={prepareURL(question)}>
                  <ListItemAvatar>
                    {result ? (
                      <CheckCircleOutlineRoundedIcon style={{ color: green[400] }} />
                    ) : (
                      <CancelOutlinedIcon style={{ color: red[400] }} />
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={problem.contestId + "-" + problem.index + " " + problem.name}
                    secondary={
                      question.author.participantType +
                      " " +
                      relativeDate(date, question.relativeTimeSeconds).toTimeString()
                    }
                  ></ListItemText>
                  <ListItemSecondaryAction>
                    <ListItemText
                      primary={problem.rating}
                      secondary={getStringFromArray(problem.tags)}
                      style={{ textAlign: "right", maxWidth: "35vw" }}
                    ></ListItemText>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </List>
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;
