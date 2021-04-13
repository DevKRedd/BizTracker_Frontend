
import React, { Component } from 'react';
import Charts from './Charts';
import ChartData from './ChartData';
import Reports from './Reports';
import Insights from './Insights';

export default class Dashboard extends Component {

    state = {
        view: "", 
      }
      changeView = (newView) => {this.setState({ view: newView})}

      renderView = () => {    
        
    
        switch (this.state.view) {
    
          case 'carts':
            return <Charts user={this.state.user} setUser={this.setUser} changeView={this.changeView} />
          case 'chart data':
            return <ChartData setUser={this.setUser} changeView={this.changeView} />
          case 'reports':
            return <Reports setUser={this.setUser} changeView={this.changeView} />
          case 'insights':
            return <Insights setUser={this.setUser} changeView={this.changeView} />
          default: 
            return <Charts  user={this.state.user} setUser={this.setUser} changeView={this.changeView} />
    
        }
      }


    render() {
        return (
            <div className= "dashboard_view">
                <div className= "header">
                    <h1>BizTracker</h1>
                    <div className= "icon_container">
                        <i className="fas fa-cog"></i>
                        <div className= "icon_button">
                        <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                </div>

                <div className= "body">
                    <div className= "nav_container">
                        <div className= "nav_button" onClick= {()=> this.changeView("dashbard")}>
                            <i className="fas fa-tachometer-alt"></i>
                            <h2>Dashboard</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("chart data")}>
                            <i className="far fa-chart-bar"></i>
                            <h2>Charts & Data</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("reports")}>
                            <i className="fas fa-edit"></i>
                            <h2>Reports</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("insights")}>
                            <i className="fas fa-eye"></i>
                            <h2>Insights</h2>
                        </div>
                    </div>
                    <div className= "body_content"> {this.renderView()}</div>
                </div>
                
            </div>
        )
    }
}


