import React, { useState } from "react";
import { ResponsiveRadar } from "@nivo/radar";
import getQuestionsMap, { QuestionMapType } from "utils/getQuestionsMap";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { Typography, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

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

export const prepareData = (questionMap: QuestionMapType) => {
  // iam getting so good at typescript lol
  let Attempts: Record<string, number> = {};
  let total = 0;
  for (const [key, value] of Object.entries(questionMap)) {
    let attemptsCount = value.incorrectSubmissions + 1;
    if (value.solved) {
      total += attemptsCount;
      let attemptsKey = attemptsCount >= 5 ? 5 : attemptsCount;
      Attempts[attemptsKey] = Attempts[attemptsKey] ? Attempts[attemptsKey] + attemptsCount : attemptsCount;
    }
  }
  return { Attempts, total };
};

const MyResponsiveRadar = () => {
  const questionMap = getQuestionsMap();
  const { Attempts, total } = prepareData(questionMap);
  const [toggle, setToggle] = useState<boolean>(true);
  const data = Object.entries(Attempts).map(([key, value]) => {
    key = key === "1" ? key + " Submission" : key;
    key = key === "5" ? key + "+" : key;
    return {
      label: key,
      value: value,
    };
  });

  return (
    <>
      <Grid container style={{ paddingTop: "2rem" }} direction="column" xs={12} md={6} lg={4}>
        <Grid item style={{ textAlign: "end" }}>
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
            label="Relative Max"
          />
        </Grid>
        <Grid item style={{ width: "100%", height: "20vw" }}>
          <ResponsiveRadar
            data={data}
            keys={["value"]}
            indexBy="label"
            maxValue={toggle ? "auto" : total}
            margin={{ top: 20, right: 20, bottom: 20, left: 30 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: "color" }}
            gridLevels={4}
            gridShape="circular"
            gridLabelOffset={10}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: "background" }}
            dotBorderWidth={2}
            dotBorderColor={{ from: "color" }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: "nivo" }}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            isInteractive={true}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" align="center">
            Number of Submissions to get <span style={{ color: green[400], fontWeight: "bold" }}>AC</span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default MyResponsiveRadar;
