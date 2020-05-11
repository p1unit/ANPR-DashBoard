import React, { Component } from "react";
import { Doughnut, Pie } from "react-chartjs-2";

class DoughnutGraph extends Component {
  state = {
    data: {
      datasets: [
        {
          data: [300, 50, 100, 100, 50],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#CC0066",
            "#3366FF",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#CC0066",
            "#3366FF",
          ],
        },
      ],
      labels: ["CAR", "BUS", "TRUCK", "TWO WHEELER", "OTHER"],
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
        <div className="flex-container-row" style={{padding:"10px"}}>
            Total Count : 370
        </div>
        <Doughnut
          width={350}
          height={300}
          options={this.options}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default DoughnutGraph;
