import React, { Component } from 'react';

/* Redux */
import connect from 'react-redux/es/connect/connect';

/* Module */
const LineChart = require('react-chartjs-2').Line;

class Graph extends Component {
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

  render() {
    const { chartOptions } = this.state;
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [
        {
          borderColor: '#333333',
          backgroundColor: 'rgba(136, 136, 136, 0.3)',
          label: ['Test'],
          data: ['1', '7', '2', '13', '14', '5', '5', '1', '8', '3'],
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

export default connect('')(Graph);
