import React from "react";
import c3 from 'c3';

class TipsChart extends React.Component {
    state = {
        column1: ['Tips', 12, 23, 41, 53, 60, 73, 76, 82, 89, 94, 100, 112]
    }

    renderChart() {
        this.chart = c3.generate({
            bindto: "#chart2",
            data: {
                columns: [this.state.column1]
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
                  label: 'Tip Aggregate ($)',
                }
        
              },
              legend: {
                show: false
            }
        });
    }
    componentDidMount() {
        this.renderChart();
      }
      componentDidUpdate() {
        this.renderChart();
      }
    render() {
        return (
            <div>
                <div id="chart2"></div>
            </div>
        );
    }
}

export default TipsChart;