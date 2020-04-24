import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class StaticChart extends React.Component {
  genData() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr[i] = Math.floor(Math.random() * 200);
    }
    return arr;
  }

  render() {
    return (
      <Doughnut
        data={{
          labels: ['Яндекс.Директ', 'Google Ads', 'MyTarget'],
          datasets: [
            {
              data: this.genData(),
              backgroundColor: ['#FFE22E', '#3091F1', '#FF5C3C'],
              hoverBorderColor: ['#FFE22E', '#3091F1', '#FF5C3C'],
              hoverBackgroundColor: ['#FFE22E', '#3091F1', '#FF5C3C']
            }
          ]
        }}
        width={160}
        height={160}
        options={{
          legend: false,
          // cutoutPercentage: 80,
          maintainAspectRatio: false
        }}
      />
    );
  }
}

export default StaticChart;
