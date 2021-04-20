import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2'

const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)'
  ];
  const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)'
  ];


export default class Insights extends Component {

    renderCharts = (displayData) => {
        let options = {}
        switch (displayData.type) {
    
            case 'Number':
              return <div className= "num"> {displayData.datasets[0].data[0]} </div>
            case 'Bar':
                options = { maintainAspectRatio: false, scales: { yAxes: [{ ticks: { beginAtZero: true } }]}};
              return <Bar data= {displayData} options={options}/>
            case 'Line':
                options = { maintainAspectRatio: false, scales: { yAxes: [{ ticks: { beginAtZero: true } }]}};
              return <Line data= {displayData} options={options}/>
            default: 
              return <div>N/A</div>
      
          }
  
    }


    render() {
        return (
            <div>
                <h2>Insights</h2>
                <div className= "insights_graph">
                    {this.renderCharts(this.props.passData)}
                </div>
                <div>
                    {(this.props.passData.trendingDirec < 0 ?
                    <div>Down</div>:
                    <div>Up {this.props.passData.trendingPerc} </div>)}
                </div>
            </div>
        )
    }
}
