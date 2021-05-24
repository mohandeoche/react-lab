// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// STEP 3 - Creating the JSON object to store the chart configurations

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Doughnut2D = ({data}) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stat per language",
        theme: "candy",
		showPercentValues:0,
		doughnuRadius:'45%',
        decimals: 0,
      },
      // Chart Data
      data
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;
