import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: ['인성면접', '직무면접', '토론면접', 'PT면접']
        }
      },
      series: [{
        data: [11, 4, 2, 1]
      }],
    }
  }

  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="bar" width="500" />
      </div>
    );
  }
}

export default Bar;
