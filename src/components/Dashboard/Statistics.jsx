// NO types 😭
import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Divider from "@material-ui/core/Divider";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Grid, Typography } from "@material-ui/core";
import userLogo from "./../../assets/wolfram-alpha.svg";
import testLogo from "./../../assets/ribbon-logo.svg";
import Link from "@material-ui/core/Link";
import getQuestionMap from "../../utils/getQuestionsMap";
import getContestData from "../../utils/getContestData";
import { QUESTION_URL } from "../../API";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    // backgroundColor: "#FAFAFA",
    mixBlendMode: "multiply",
    borderRadius: 20,
    maxWidth: "30vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80vw",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "60vw",
    },
  },
  content: {
    padding: 24,
  },
  listContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    "& .MuiTypography-root": {
      fontSize: "16px",
      fontWeight: 500,
      padding: "4px 0",
      fontFamily: "monospace",
    },
  },
}));

const prepareData = (QuestionMap) => {
  const questionData = {
    QuestionsAttempted: 0,
    QuestionsSolved: 0,
    AverageAttempts: 0,
    bestQuestionByRating: {
      rating: 0,
      id: "",
      url: "",
    },
    QuestionsUnsolved: 0,
  };

  let max = -Infinity;
  let totalSubmission = 0;
  for (const [, value] of Object.entries(QuestionMap)) {
    totalSubmission += value.solved ? value.incorrectSubmissions + 1 : value.incorrectSubmissions;
    questionData.QuestionsSolved += value.solved ? 1 : 0;
    if (value.rating > max) {
      max = value.rating;
      questionData.bestQuestionByRating = {
        rating: value.rating,
        id: value.contestId + "-" + value.index,
        url: `${QUESTION_URL}/${value.contestId}/${value.index}`,
      };
    }
  }
  questionData.AverageAttempts = (totalSubmission / questionData.QuestionsSolved).toFixed(2);
  questionData.QuestionsAttempted = Object.entries(QuestionMap).length;
  questionData.QuestionsUnsolved = questionData.QuestionsAttempted - questionData.QuestionsSolved;
  return questionData;
};

export const Statistics = React.memo(function ProjectCard() {
  const QuestionData = prepareData(getQuestionMap());
  const ContestData = getContestData();

  console.log(ContestData);
  console.log(QuestionData);
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const classes = useStyles();
  return (
    <Grid container style={{ padding: "2rem 0rem " }} direction="row" justify="space-around">
      <Grid item xs={12} md={6}>
        <Card className={cx(classes.root, shadowStyles.root)}>
          <BrandCardHeader image={userLogo} extra={"Question Stats"} />
          <CardContent className={classes.content}>
            <TextInfoContent classes={styles} overline={"@rishgod"} />
            <div className={classes.listContainer}>
              <Typography>Number of Questions Attempted</Typography>
              <Typography>{QuestionData.QuestionsAttempted}</Typography>
            </div>
            <div className={classes.listContainer}>
              <Typography>Number of Questions Solved</Typography>
              <Typography>{QuestionData.QuestionsSolved}</Typography>
            </div>
            <div className={classes.listContainer}>
              <Typography>Number of Unsolved Solved</Typography>
              <Typography>{QuestionData.QuestionsUnsolved}</Typography>
            </div>
            <div className={classes.listContainer}>
              <Typography>Average Attempts to be AC </Typography>
              <Typography>{QuestionData.AverageAttempts}</Typography>
            </div>
            <div className={classes.listContainer}>
              <Typography>Hardest Question Solved</Typography>
              <Typography>
                <Link href={QuestionData.bestQuestionByRating.url} target="_blank">
                  {QuestionData.bestQuestionByRating.id} {`(${QuestionData.bestQuestionByRating.rating})`}
                </Link>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={cx(classes.root, shadowStyles.root)}>
          <BrandCardHeader
            // image={"https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"}
            image={testLogo}
            extra={"Contest Stats"}
          />
          <CardContent className={classes.content}>
            <TextInfoContent classes={styles} overline={"@rishgod"} />
            {Object.entries(ContestData).map(([key, value]) => {
              return (
                <div key={key} className={classes.listContainer}>
                  <Typography>{key}</Typography>
                  <Typography>{value}</Typography>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});

export default Statistics;
