import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2'
import ReactToPdf from "react-to-pdf";

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

  const ref = React.createRef();
  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
};

export default class Charts extends Component {
    
    state = {
        displayData: [],

        user: {
            firstName: "Khalin",
            lastName: "Redding",
            companyName: "Bizze Inc.",
        },
        userDashboardData: [],
        chartList: []
    }
    
    generateChartData = (info, chartListData)=> {
        let returnData = {
            labels: [],
            type: info.chart_type,
            size: info.size,
            trendingPerc: 0,
            trendingDirec: 0,
            datasets: [{
                label: info.dashboard_title,
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
            returnData.datasets[0].data.push(chartListData.data[i].data_point)
            returnData.datasets[0].backgroundColor.push(backgroundColor[i])
            returnData.datasets[0].borderColor.push(borderColor[i])
            if (i > 0){
                returnData.trendingPerc = ((chartListData.data[i].data_point - chartListData.data[i-1].data_point)/ chartListData.data[i-1].data_point) * 100;

                returnData.trendingDirec = (returnData.trendingPerc > 0? 1:-1);

                returnData.trendingPerc = Math.abs(returnData.trendingPerc)
            }
        }
        if(info.chartType === 'line'){
            returnData.datasets[0].fill = false;
        }

        let tempList = this.state.displayData;
        tempList.push(returnData)
        this.setState({ displayData: tempList })

    }

    getUserChartData = (user_id) => {

        this.getUserDashboards(user_id);

    }

    getUserDashboards = (user_id) => {

        let URL = "http://localhost:3000/users/" + user_id + "/user_dashboard"

        let reqObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }  
        }

        fetch(URL, reqObj)
        .then(r => r.json())
        .then(data => {
                console.log(data)
                for(let i=0; i < data.length; i++){
                    this.getKPIData(user_id, i, data[i])
                }
                       
            })
    }

    getKPIData = (user_id, number, dashData) => {

        let reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.token
            },
            body: JSON.stringify({
                    id: user_id,
                    quarter_number: dashData.quarter_number,
                    year: 2021,
                    kpi: dashData.dashboard_title

            })
        }
        fetch('http://localhost:3000/getKpiData', reqObj)
        .then(r => r.json())
        .then(data => {
                console.log(data)
                dashData.size = ((number+2) % 3 === 0 ? 10 : 5);
                this.generateChartData(dashData, data);
            })
    }

    getChartData = () => {
        let tmpData = [{
            dashboardTitle:"Montly Recurring Revanue",
            chartType:"number", quarterNumber: 1
        },
        {
            dashboardTitle:"Unique Vistors",
            chartType:"bar", quarterNumber: 1
        },
        {
            dashboardTitle:"Churn Rate",
            chartType:"line", quarterNumber: 1
        }];

        let tmpChartData = [{
            title: "Montly Recurring Revanue",
            data: [{ title: "Jan", dataPoint: 8000 }]   
        },
        {
            title: "Unique Vistors",
            data: [
                {title: "Jan", dataPoint: 8000},
                {title:"Feb", dataPoint: 3000},
                {title: "Mar", dataPoint: 3200}]
        },
        {
            title: "Churn Rate",
            data: [
                {title: "Feb", dataPoint: 80},
                {title:"Mar", dataPoint: 30},
                {title: "Apr", dataPoint: 15}]
        }];
        for(let i=0; i < tmpData.length; i++){
            tmpData[i].size = ((i+2) % 3 === 0 ? 10 : 5);
            this.generateChartData(tmpData[i], tmpChartData[i]);
        }
    }

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
    // GetUserCharts
    componentDidMount = () =>{
        this.getUserDashboards(1)
        // this.getChartData()
    }
    render() {
        return (
        <div>
            
        
        <div ref={ref}>
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
                    {this.state.displayData.map((item,i)=>
                    <div className={"block sz-" + item.size} key={i}>
                    <div className="block_content">
                        <div>
                            {item.trendingPerc}% {(item.trendingDirec < 0?<i className="fas fa-arrow-down" ></i>:<i className="fas fa-arrow-up"></i>)}
                        </div>
                        {this.renderCharts(item)}
                    </div>
                </div>
                    )}
                </div>
            </div>
        </div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({toPdf}) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div style={{width: 0, height: 0, background: 'blue'}} ref={ref}/>
    </div>
    
        )
    }
}
