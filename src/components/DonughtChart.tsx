import React from "react";
import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "go",
    label: "go",
    value: 66,
    color: "hsl(207, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 54,
    color: "hsl(102, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 270,
    color: "hsl(38, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 34,
    color: "hsl(235, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 362,
    color: "hsl(327, 70%, 50%)",
  },
];

const MyResponsivePie = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.65}
    colors={{ scheme: "nivo" }}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={0}
    radialLabelsTextColor="#333333"
    radialLabelsLinkDiagonalLength={10}
    radialLabelsLinkHorizontalLength={22}
    radialLabelsLinkColor={{ from: "color" }}
    sliceLabel="value"
    sliceLabelsSkipAngle={10}
    sliceLabelsTextColor="#333333"
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);
export default MyResponsivePie;

{
  /* <Pie
{...commonProperties}
innerRadius={0.8}
enableSliceLabels={false}
radialLabel={d => `${d.id} (${d.formattedValue})`}
layers={['slices', 'sliceLabels', 'radialLabels', 'legends', CenteredMetric]}
/> */
}
