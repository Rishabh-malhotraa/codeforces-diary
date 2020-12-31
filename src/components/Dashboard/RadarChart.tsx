import React, { useState } from "react";
import { ResponsiveRadar } from "@nivo/radar";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { Typography, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { QuestionMapType } from "types";
import { useSelector } from "react-redux";
import { selectQuestionMap } from "reducers/slices/FetchedDataSlice";

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
  for (const [, value] of Object.entries(questionMap)) {
    let attemptsCount = value.incorrectSubmissions + 1;
    if (value.solved) {
      total += 1;
      let attemptsKey = attemptsCount >= 5 ? 5 : attemptsCount;
      Attempts[attemptsKey] = Attempts[attemptsKey] ? Attempts[attemptsKey] + 1 : 1;
    }
  }
  return { Attempts, total };
};

const MyResponsiveRadar = () => {
  //@ts-ignore
  const questionMap = useSelector(selectQuestionMap);
  const { Attempts, total } = prepareData(questionMap);
  const [toggle, setToggle] = useState<boolean>(false);
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
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={6}
        lg={4}
        justify="space-around"
        style={{ position: "relative", paddingTop: "1rem" }}
      >
        {/* this animation for some reason not working on netlify dunno why T-T */}
        <Grid item style={{ position: "absolute", top: "0px", right: "0px", zIndex: 3, display: "none" }}>
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
        <Grid item style={{ width: "100%", height: "20vw", zIndex: 2 }}>
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
