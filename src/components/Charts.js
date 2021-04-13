import React, { Component } from 'react';
// import { Bar } from '@reactchartjs/react-chart.js'

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

export default class Charts extends Component {
    
    state = {
        displayData: [],

        user: {
            firstName: "Khalin",
            lastName: "Redding",
            companyName: "Bizze Inc.",
        },
        userDashboardData: [{
            dashboardTitle:"Montly Recurring Revanue",
            chartType:"number" ,
            quarterNumber: 1
        },
        {
            dashboardTitle:"Unique Vistors",
            chartType:"bar" ,
            quarterNumber: 1
        }
    ],
        chartList: [{
            title: "Montly Recurring Revanue",
            data: [{
                title: "Jan", 
                dataPoint: 8000
            }]   
        },
        {
            title: "Unique Vistors",
            data: [
                {title: "Jan", dataPoint: 8000},
                {title:"Feb", dataPoint: 300},
                {title: "Mar", dataPoint: 1200}
        ]
        }]
    }
    
    generateChartData = (info, chartListData)=> {
        let returnData = {
            labels: [],
            type: info.chartType,
            dataset: [{
                label: info.dashboardTitle,
                data: [],
                backgroundColor: [
                    
                  ],
                  borderColor: [
                    
                  ],
                  borderWidth: 1,
            }]
        }
    
        for(let i=0; i < chartListData.data.length; i++){
            returnData.labels.push(chartListData.data[i].title)
            returnData.dataset[0].data.push(chartListData.data[i].dataPoint)
            returnData.dataset[0].backgroundColor.push(backgroundColor[i])
            returnData.dataset[0].borderColor.push(borderColor[i])
        }

        let tempList = this.state.displayData;
        tempList.push(returnData)
        this.setState({ displayData: tempList })

    }

    renderCharts = (displayData) => {
        
    }
    // GetUserCharts
    
    render() {
        return (
            <div className= "dashboard_page">
                <div className= "block_container">
                    <div className="block sz-5">
                        <div className="block_content">
                            <div className= "Welcome">
                                <p>Welcome</p>
                                <p>{this.state.user.firstName} {this.state.user.lastName}</p>
                                <p className= "mini_text"> of {this.state.user.companyName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="block sz-5"><div className="block_content"></div></div>
                    <div className="block sz-10"><div className="block_content"></div></div>
                    <div className="block sz-5"><div className="block_content"></div></div>
                    <div className="block sz-5"><div className="block_content"></div></div>
                </div>
            </div>
        )
    }
}
