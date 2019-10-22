import React, { Component } from 'react';

/* Redux */
import connect from 'react-redux/es/connect/connect';

/* Module */
const LineChart = require('react-chartjs-2').Bar;

class Bar extends Component {
  state = {
    chartOptions: {
      elements: { line: { tension: 0 } },
      legend: { position: 'none' },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              fontColor: '#8798AD',
              fontSize: 14,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: false,
              fontColor: '#8798AD',
              fontSize: 14,
            },
          },
        ],
      },
    },
  };

  genData() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr[i] = Math.floor(Math.random() * 50);
    }
    return arr;
  }

  render() {
    const { chartOptions } = this.state;
    const data = {
      labels: ['1', '1', '1', '1', '1'],
      datasets: [
        {
          borderColor: '#3091F1',
          backgroundColor: 'rgba(136, 136, 136, 0.3)',
          label: ['1', '2', '3', '4', '5'],
          data: this.genData(),
        },
      ],
    };

    return (
      <div className="analytics__graph">
        <LineChart data={data} options={chartOptions} width={600} height={400} />
      </div>
    );
  }
}

export default connect('')(Bar);
