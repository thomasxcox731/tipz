import React from "react";
import c3 from 'c3';
import 'c3/c3.css';

class MileageChart extends React.Component {
  state = {
    column1: ['Work', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250],
    column2: ['Medical', 50, 20, 10, 40, 15, 25, 50, 20, 10, 40, 15, 25],
    column3: ['Moving', 50, 20, 10, 40, 15, 25, 50, 20, 10, 40, 15, 25],

  }
  renderChart() {
    this.chart = c3.generate({
      bindto: "#chart1",
      data: {
        columns: [this.state.column1, this.state.column2, this.state.column3],
        type: 'bar',
        groups: [['Work', 'Medical', 'Moving']],
      },
      axis: {
        x: {
          label: {
            text: 'Month',
            position: 'outer-center',
          },
          type: 'category',
          categories: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        y: {
          label: 'Total Mileage (miles)',
        }

      }
    });
  }
  componentDidMount() {
    this.renderChart();
  }
  componentDidUpdate() {
    this.renderChart();
  }
  // changeData = () => {
  //   this.setState({
  //     column1: ["data1", 70, 120, 30, 300, 230, 300],
  //     column2: ["data2", 100, 120, 50, 140, 150, 80],
  //   });
  // }

  render() {
    return (
      <div>
        <div id="chart1"></div>
        {/* <button onClick={this.changeData}>Change</button> */}
      </div>
    );
  }
}

export default MileageChart;
