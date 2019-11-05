import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import data from "./data";
import dataset from "./dataset";
import "react-vis/dist/style.css";
import {
  XYPlot,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalBarSeries,
  HorizontalGridLines,
  DiscreteColorLegend,
  ContinuousColorLegend,
  LabelSeries
} from "react-vis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      data: dataset
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.changeData();
  //   }, 4000);
  // }

  // changeData = () => {
  //   this.setState({ data });
  // };

  // formatXaxis = (t, i) => {
  //   return (
  //     <tspan>
  //       <tspan x="0" dy="1em">
  //         {t}ms
  //       </tspan>
  //     </tspan>
  //   );
  // };
  formatNpsXaxis = (t, i) => {
    return (
      <tspan>
        <tspan x="0" dy="1em">
          {t}
        </tspan>
      </tspan>
    );
  };

  // formatYaxis = (t, i) => {
  //   return (
  //     <tspan>
  //       <tspan x="0" dy="1em">
  //         {t}
  //       </tspan>
  //     </tspan>
  //   );
  // };

  render() {
    const primary = `rgba(56, 81, 197, 1)`;
    const secondary = `#909EDE`;

    const payload = [
      {
        mainCategory: "Accounting",
        subCategory: [
          // X - is percentage
          { x: 20, y: "Accounting", description: "male employees" }, //y should NOT change
          { x: 20, y: "Accounting", description: "female employees" },
          { x: 20, y: "Accounting", description: "bot employees" }
        ]
      },
      {
        mainCategory: "sales",
        subCategory: [
          { x: 20, y: "sales", description: "male employees" },
          { x: 30, y: "sales", description: "female employees" },
          { x: 10, y: "sales", description: "bot employees" }
        ]
      },
      ,
      {
        mainCategory: "HR",
        subCategory: [
          { x: 20, y: "HR", description: "male employees" },
          { x: 60, y: "HR", description: "bot employees" }
        ]
      },
      ,
      {
        mainCategory: "enginering",
        subCategory: [
          { x: 20, y: "enginering", description: "male employees" },
          { x: 20, y: "enginering", description: "female employees" },
          { x: 20, y: "enginering", description: "bot employees" },
          { x: 20, y: "enginering", description: "other employees" },
          { x: 20, y: "enginering", description: "test" }
        ]
      }
    ];

    return (
      <div>
        {/*
      <div
        style={{
          display: "inline-block",
          border: "dashed .5px",
          height: "250px",
          marginBottom: "10px"
        }}
      >

        <XYPlot
          yType="ordinal"
          xType="linear"
          margin={{ left: 190, top: 40, bottom: 50, right: 50 }}
          height={250}
          width={600}
        >
          <XAxis
            orientation="top"
            attr="x"
            attrAxis="y"
            orientation="top"
            position="end"
            title=""
            tickFormat={this.formatXaxis}
            tickTotal={3}
          />
          <YAxis width={190} />
          <VerticalGridLines style={{ strokeDasharray: "4" }} />
          <HorizontalBarSeries
            strokeStyle="solid"
            className={""}
            barWidth={0.035}
            color={"#2FA2F8"}
            animation
            data={this.state.data}
          />
        </XYPlot>
*/}
        {/*SECOND GRAPH*/}

        <div
          style={{
            padding: "1em",
            marginTop: "5em",
            display: "inline-block",
            border: "dashed .5px",
            height: "250px"
          }}
        >
          <XYPlot
            width={600}
            height={300}
            yType="ordinal"
            margin={{ left: 90, top: 20, bottom: 20, right: 50 }}
            xType="linear"
            stackBy="x"
          >
            <XAxis
              attr="x"
              attrAxis="y"
              orientation="top"
              position="end"
              title=""
              tickFormat={this.formatNpsXaxis}
              tickTotal={3}
            />
            <YAxis />
            {payload.map(obj =>
              obj.subCategory.map(sub => (
                <HorizontalBarSeries
                  barWidth={0.105}
                  data={[{ x: sub.x, y: sub.y }]}
                />
              ))
            )}
          </XYPlot>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
