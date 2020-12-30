import React from "react";
import { VictoryPie, VictoryTooltip } from "victory";
import { Grid, Typography } from "@material-ui/core";
import { QuestionMapType } from "./../../types";
import { useSelector } from "react-redux";
import { selectQuestionMap } from "reducers/slices/FetchedDataSlice";

const prepareData = (questionMap: QuestionMapType) => {
  let Ratings: Record<string, number> = {};
  let Levels: Record<string, number> = {};
  let offset = 0;
  for (const [, question] of Object.entries(questionMap)) {
    const ratingKey = question.rating;
    if (ratingKey === undefined) {
      offset += 1;
      continue;
    }
    const levelKey = question.index.slice(0, 1);
    Ratings[ratingKey] = Ratings[ratingKey] ? Ratings[ratingKey] + 1 : 1;
    Levels[levelKey] = Levels[levelKey] ? Levels[levelKey] + 1 : 1;
  }

  const total = Object.entries(questionMap).length - offset;
  const RatingsList = Object.entries(Ratings).map(([key, value]) => {
    return {
      x: key,
      y: value,
      label: `Rating: ${key}
      
      ${value}/ ${total} =  ${Math.ceil((value * 100) / total)}% `,
    };
  });

  const LevelsList = Object.entries(Levels).map(([key, value]) => {
    return {
      x: key,
      y: value,
      label: `Type: ${key}
      
      ${value}/ ${total} =  ${Math.ceil((value * 100) / total)}% `,
    };
  });

  return { RatingsList, LevelsList };
};

//@ts-ignore
const CustomLabel = (props) => {
  return (
    <g>
      <VictoryTooltip
        {...props}
        x={200}
        y={287.5}
        style={{ fontSize: "18px", fontWeight: "bold" }}
        orientation="top"
        pointerLength={0}
        cornerRadius={87.5}
        flyoutWidth={175}
        flyoutHeight={175}
        flyoutStyle={{ fill: "whitesmoke", strokeWidth: "2", stroke: "greysmoke" }}
      />
    </g>
  );
};

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const DonughtChart: React.FC<{ data: any[] }> = ({ data }) => {
  const [value, setValue] = React.useState(data.slice(0, 1));

  React.useEffect(() => {
    setValue(data); // Setting the data that we want to display
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div style={{ height: "20vw" }}>
        <VictoryPie
          animate={{ easing: "exp" }}
          labelComponent={<CustomLabel />}
          // padAngle={({ datum }) => datum.y}
          innerRadius={100}
          labelRadius={120}
          data={value}
          colorScale={["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D", "#43AA8B", "#577590"]}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => ({ style: { fill: "black", width: 30 } }),
                    },
                    {
                      target: "labels",
                      mutation: () => ({ active: true }),
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {},
                    },
                    {
                      target: "labels",
                      mutation: () => ({ active: false }),
                    },
                  ];
                },
              },
            },
          ]}
        />
      </div>
    </>
  );
};

const DonughtChartsWrapper = () => {
  const { RatingsList, LevelsList } = prepareData(useSelector(selectQuestionMap));
  return (
    <>
      <Grid item container justify="space-around" xs={12} md={6} lg={4} style={{ paddingTop: "1rem" }}>
        <DonughtChart data={RatingsList} />
        <Typography variant="h6" align="center">
          Questions Rating - Pie Chart
        </Typography>
      </Grid>
      <Grid item container justify="space-around" xs={12} md={6} lg={4} style={{ paddingTop: "1rem" }}>
        <DonughtChart data={LevelsList} />
        <Typography variant="h6" align="center">
          Questions Level - Pie Chart
        </Typography>
      </Grid>
    </>
  );
};

export default DonughtChartsWrapper;
