import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineGraph extends Component {
  state = {
    data: {
      labels: ["Day 7", "Day 6", "Day 5", "Day 4", "Day 3", "Day 2", "Day 1"],
      datasets: [
        {
          label: "CAR",
          fill: false,
          // lineTension: 0.1,
          backgroundColor: "#FF6384",
          borderColor: "#FF6384",
          data: [62, 49, 67, 41, 86, 25, 44],
        },
        {
          label: "BUS",
          fill: false,
          // lineTension: 0.1,
          backgroundColor: "#36A2EB",
          borderColor: "#36A2EB",
          data: [2, 39, 40, 51, 43, 46, 20],
        },
        {
          label: "TRUCK",
          fill: false,
          // lineTension: 0.1,
          backgroundColor: "#FFCE56",
          borderColor: "#FFCE56",
          data: [23, 54, 60, 31, 26, 45, 42],
        },
        {
          label: "TWO_WHEELER",
          fill: false,
          // lineTension: 0.1,
          backgroundColor: "#CC0066",
          borderColor: "#CC0066",
          data: [51, 24, 45, 56, 36, 35, 12],
        },
        {
          label: "OTHER",
          fill: false,
          // lineTension: 0.1,
          backgroundColor: "#3366FF",
          borderColor: "#3366FF",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
  };

  options = {
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 10,
      },
    },
  };

  render() {
    return (
      <div>
        <div className="flex-container-row" style={{ padding: "10px" }}>
          Total Count : 370
        </div>

        <Line
          width={600}
          height={300}
          options={this.options}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default LineGraph;
