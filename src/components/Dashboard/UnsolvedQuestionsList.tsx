import React, { useState } from "react";
import getQuestionMap, { QuestionMapType } from "utils/getQuestionsMap";
import { Typography, Link, Divider, FormControlLabel, Switch, Grid, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const QUESTION_URL = "https://codeforces.com/problemset/problem";

const prepareData = (questionMap: QuestionMapType) => {
  const dataFiltered = Object.entries(questionMap).filter(([key, value]) => {
    return value.solved === false;
  });
  const data = dataFiltered.map((element) => {
    const key = element[0];
    const value = element[1];
    return {
      id: key,
      url: `${QUESTION_URL}/${value.contestId}/${value.index}`,
      rating: value.rating,
    };
  });
  return data;
};

const GreenSwitch = withStyles({
  switchBase: {
    "&$checked": {
      color: green[500],
    },
    "&$checked + $track": {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const UnsolvedQuestionsList = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const questionList = prepareData(getQuestionMap());
  if (toggle) questionList.sort((a, b) => (a.rating > b.rating ? 1 : -1));

  return (
    <div>
      <Grid container direction="column" style={{ padding: "2rem", backgroundColor: "#FAFAFA" }}>
        <Grid item style={{ display: "flex" }}>
          <Typography variant="h4" gutterBottom style={{ flexGrow: 1 }}>
            Unsolved Questions
          </Typography>
          <FormControlLabel
            control={
              <GreenSwitch
                checked={toggle}
                onChange={() => {
                  setToggle(!toggle);
                }}
                color="default"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            labelPlacement="start"
            label="Sort By difficulty"
          />
        </Grid>
        <Divider />

        <Typography style={{ paddingTop: "1rem" }}>
          {questionList.map((question) => {
            return (
              <Link
                href={question!.url}
                target="_blank"
                key={question!.id}
                style={{ padding: "0 0.5rem 0 0.5rem" }}
              >
                {question!.id}
              </Link>
            );
          })}
        </Typography>
      </Grid>
    </div>
  );
};

export default UnsolvedQuestionsList;
