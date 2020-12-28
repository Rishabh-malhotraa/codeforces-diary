import React from 'react';
import * as V from 'victory';

const StackedBar = () => {
  return (
    <div>
      <div style={{ width: '35vw', height: '30vh' }}>
        <V.VictoryChart theme={V.VictoryTheme.grayscale}>
          <V.VictoryStack
            labelComponent={
              <V.VictoryTooltip cornerRadius={2} pointerLength={0} />
            }
            style={{
              data: {
                stroke: 'rgba(255,255,255,1)',
                strokeWidth: 5,
              },
            }}
            // theme={V.VictoryTheme.grayscale}
            colorScale={[
              '#F94144',
              '#F3722C',
              '#F8961E',
              '#F9C74F',
              '#90BE6D',
              '#43AA8B',
              '#577590',
            ]}
          >
            <V.VictoryBar
              barWidth={80}
              horizontal
              data={[{ x: 'progress', y: 50, label: 'rishabh \n 99/100' }]}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onMouseOver: () => {
                      return [
                        {
                          target: 'data',
                          mutation: () => ({
                            style: {
                              fill: 'toamato',
                              stroke: 'gold',
                              strokeWidth: 5,
                              width: 30,
                            },
                          }),
                        },
                        {
                          target: 'labels',
                          mutation: () => ({ active: true }),
                        },
                      ];
                    },
                    onMouseOut: () => {
                      return [
                        {
                          target: 'data',
                          mutation: () => {},
                        },
                        {
                          target: 'labels',
                          mutation: () => ({ active: false }),
                        },
                      ];
                    },
                  },
                },
              ]}
            />
            <V.VictoryBar
              barWidth={40}
              horizontal
              data={[{ x: 'progress', y: 25, label: 'c++' }]}
            />
            <V.VictoryBar
              barWidth={40}
              horizontal
              data={[{ x: 'progress', y: 25, label: 'c++' }]}
            />
            <V.VictoryBar
              barWidth={40}
              horizontal
              data={[{ x: 'progress', y: 25, label: 'c++' }]}
            />
            <V.VictoryBar
              barWidth={40}
              horizontal
              data={[{ x: 'progress', y: 25, label: 'java' }]}
            />
          </V.VictoryStack>
        </V.VictoryChart>
      </div>
    </div>
  );
};

export default StackedBar;
