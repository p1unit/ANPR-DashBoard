import React, { Component } from "react";
import { Doughnut, Pie } from "react-chartjs-2";

class DoughnutGraph extends Component {

  color = ["#FF6384","#36A2EB","#FFCE56","#CC0066","#3366FF",];

  state = {
    data: {
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        },
      ],
      labels: [],
    },
    allCount : 0 ,
  };

  converter = () =>{

    console.log(this.props);

    var cnt = 0;
    
    var obj = { 
      data : {
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        },
      ],
      labels: [],
    }
  }

  console.log(this.props.data);
  
  for (let idx = 0; idx < this.props.data.length; idx++) {
      cnt += this.props.data[idx].count;
      obj.data.datasets[0].data.push(this.props.data[idx].count);
      obj.data.datasets[0].backgroundColor.push(this.color[idx%this.color.length]);  
      obj.data.datasets[0].hoverBackgroundColor.push(this.color[idx%this.color.length]);  
      obj.data.labels.push(this.props.data[idx].type);
  }

    // obj.data.datasets[0].data.push(300);
    // obj.data.datasets[0].data.push(400);
    // obj.data.datasets[0].data.push(500);

    // obj.data.datasets[0].backgroundColor.push("#FF6384");
    // obj.data.datasets[0].backgroundColor.push("#36A2EB");
    // obj.data.datasets[0].backgroundColor.push("#CC0066");

    // obj.data.datasets[0].hoverBackgroundColor.push("#FF6384");
    // obj.data.datasets[0].hoverBackgroundColor.push("#36A2EB");
    // obj.data.datasets[0].hoverBackgroundColor.push("#CC0066");

    // obj.data.labels.push('CAR');
    // obj.data.labels.push('BUS');
    // obj.data.labels.push('TRUCK');
    const data = {
      data:obj.data,
      allcount: cnt,
    };


  return data;
  }

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

    const data  = this.converter(); 

    if(this.state.data==null)
      return ( <h1>Loading</h1> );

    return (
      <div>
        <div className="flex-container-row" style={{padding:"10px"}}>
            Total Count : {data.allcount}
        </div>
        <Doughnut
          width={350}
          height={300}
          options={this.options}
          data={data.data}
        />
      </div>
    );
  }
}

export default DoughnutGraph;
