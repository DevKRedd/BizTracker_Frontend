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
        let style = {
            fontSize: 20
        }
        return (
            <div className= "insights_view" >
                <h2>Insights</h2>
                <div className= "insights_graph">
                    {this.renderCharts(this.props.passData)}
                </div>
                <div>
                    {(this.props.passData.trendingDirec < 0 ?
                    <div>
                        <p style= {style}>
                            We see that you are down {Math.round(this.props.passData.trendingPerc)}% since last month. Our team has found unique resources that may cater towards your needs and get your team back on track: 
                        </p>
                        <div className= "container_insights">
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                                <p>Articles</p>
                                <ul>
                                    <li><a href="https://backlinko.com/increase-website-traffic" rel="noreferrer">27 Ways to Increase Traffic to Your Website</a></li>
                                    <li><a href="https://www.wordstream.com/blog/ws/2014/08/14/increase-traffic-to-my-website" rel="noreferrer">25 Ways to Increase Traffic to Your Website</a></li>
                                    <li><a href="https://websitesetup.org/increase-website-traffic/" rel="noreferrer">How to Increase Website Traffic</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                            <p>Content Creation Tools</p>
                                <ul>
                                    <li><a href="https://www.canva.com/" rel="noreferrer">Canva</a></li>
                                    <li><a href="https://spark.adobe.com/" rel="noreferrer">Adobe Spark</a></li>
                                    <li><a href="https://www.fotor.com/" rel="noreferrer">https://www.fotor.com/</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                            <p>Consulting Firms</p>
                                <ul>
                                    <li><a href="https://www.orchid.black/?utm_source=clutch.co&utm_medium=referral&utm_campaign=directory" rel="noreferrer">Orchid Black</a></li>
                                    <li><a href="https://www.argonapartners.com/?utm_source=clutch.co&utm_medium=referral&utm_campaign=directory" rel="noreferrer">Argona Partners</a></li>
                                    <li><a href="https://levinriegner.com/home/?utm_source=clutch.co&utm_medium=referral&utm_campaign=directory" rel="noreferrer">L+R Strategy + Aesthetics</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                            <p>Hire A Freelancer</p>
                                <ul>
                                    <li><a href="https://www.upwork.com/ppc/landing/?gclid=CjwKCAjwmv-DBhAMEiwA7xYrdy5YbIoOs_0xLgwbxfXP6Rc0raY-4Z5qsGgu3M8vbzowfSK1fXgMQxoCp7sQAvD_BwE&utm_campaign=10900881111&utm_campaign=10900881111&utm_content=115726847428&utm_medium=cpc&utm_medium=paidsearch&utm_source=google&utm_source=google&utm_term=freelancer&vt_adg=115726847428&vt_cmp=10900881111&vt_device=c&vt_kw=freelancer&vt_src=google">UpWork</a></li>
                                    <li><a href="https://www.fiverr.com/?utm_source=4865&utm_medium=cx_affiliate&utm_campaign=5bc719a237555&afp=&cxd_token=4865_10367318&show_join=true" rel="noreferrer">Fiverr</a></li>
                                    <li><a href="https://www.peopleperhour.com/" rel="noreferrer">PeoplePerHour</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div> :
                    <div>
                        <p style= {style}>
                            We see that you are up {Math.round(this.props.passData.trendingPerc)} % since last month. Our team has found unique resources that aim to help you stay ahead: 
                        </p>
                        <div className= "container_insights">
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                                <p>Articles</p>
                                <ul>
                                    <li><a href="https://www.revechat.com/blog/how-to-win-new-customers/" rel="noreferrer">12 Killer Strategies of How to Win Customers for Life</a></li>
                                    <li><a href="https://www.inc.com/andrew-griffiths/combine-these-7-strategies-your-business-will-boom.html">The 7 Simplest and Smartest Ways to Create a Winning Business</a></li>
                                    <li><a href="https://thesalesblog.com/2013/01/15/dont-take-your-foot-off-the-accelerator/" rel="noreferrer">Don’t Take Your Foot Off the Accelerator</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                            <p>Content Creation Tools</p>
                                <ul>
                                    <li><a href="https://www.canva.com/" rel="noreferrer">Canva</a></li>
                                    <li><a href="https://spark.adobe.com/" rel="noreferrer">Adobe Spark</a></li>
                                    <li><a href="https://www.fotor.com/" rel="noreferrer">https://www.fotor.com/</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                            <p>Consulting Firms</p>
                                <ul>
                                    <li><a href="https://www.orchid.black/?utm_source=clutch.co&utm_medium=referral&utm_campaign=directory" rel="noreferrer">Orchid Black</a></li>
                                    <li><a href="https://www.argonapartners.com/?utm_source=clutch.co&utm_medium=referral&utm_campaign=directory" rel="noreferrer">Argona Partners</a></li>
                                    <li><a href="https://levinriegner.com/home/?utm_source=clutch.co&utm_medium=referral&utm_campaign=directory" rel="noreferrer">L+R Strategy + Aesthetics</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className= "block_container_insights"> 
                            <div className="block_insights sz-5">
                            <p>Hire A Freelancer</p>
                                <ul>
                                    <li><a href="https://www.upwork.com/ppc/landing/?gclid=CjwKCAjwmv-DBhAMEiwA7xYrdy5YbIoOs_0xLgwbxfXP6Rc0raY-4Z5qsGgu3M8vbzowfSK1fXgMQxoCp7sQAvD_BwE&utm_campaign=10900881111&utm_campaign=10900881111&utm_content=115726847428&utm_medium=cpc&utm_medium=paidsearch&utm_source=google&utm_source=google&utm_term=freelancer&vt_adg=115726847428&vt_cmp=10900881111&vt_device=c&vt_kw=freelancer&vt_src=google">UpWork</a></li>
                                    <li><a href="https://www.fiverr.com/?utm_source=4865&utm_medium=cx_affiliate&utm_campaign=5bc719a237555&afp=&cxd_token=4865_10367318&show_join=true" rel="noreferrer">Fiverr</a></li>
                                    <li><a href="https://www.peopleperhour.com/" rel="noreferrer">PeoplePerHour</a></li>
                                
                                </ul>
                            </div>
                        </div>
                        </div>
                    
                    </div>)}
                </div>
            </div>
        )
    }
}
