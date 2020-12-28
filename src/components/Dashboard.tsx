import React from 'react';
import axios from 'axios';
import { USER_INFO, USER_QUESTIONS, USER_RATING } from 'API';
import * as V from 'victory';
import { QuestionListWrapper, QuestionListType } from 'response/user_questions';

import { VictoryLabel, VictoryTooltip, VictoryPie } from 'victory';
import { Typography } from '@material-ui/core';
//@ts-ignore
const CustomLabel = (props) => {
  return (
    <g>
      <VictoryLabel {...props} />
      <VictoryTooltip
        {...props}
        x={200}
        y={250}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        flyoutWidth={100}
        flyoutHeight={100}
        flyoutStyle={{ fill: 'purple' }}
      />
    </g>
  );
};

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const Dashboard = () => {
  return (
    <div style={{ width: '30vw', height: '30vh' }}>
      <VictoryPie
        animate
        colorScale={[
          '#F94144',
          '#F3722C',
          '#F8961E',
          '#F9C74F',
          '#90BE6D',
          '#43AA8B',
          '#577590',
        ]}
        style={{ labels: { fill: 'white' } }}
        innerRadius={100}
        labelRadius={120}
        labels={({ datum }) => `# ${datum.y}`}
        labelComponent={<CustomLabel />}
        data={[
          { x: 1, y: 5 },
          { x: 2, y: 4 },
          { x: 3, y: 2 },
          { x: 4, y: 3 },
          { x: 5, y: 1 },
        ]}
      />
      <Typography variant={'h6'}>Verdicts of Rishabh</Typography>
    </div>
  );
};

export default Dashboard;
