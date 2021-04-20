import React, { Component } from 'react'
import MonthlyUniqueVisitors from './charts/MonthlyUniqueVisitors';
import ProductQualifiedLeads from './charts/ProductQualifiedLeads';
import SignUps from './charts/SignUps';
import AverageRevenuePerAccount from './charts/AverageRevenuePerAccount';
import TotalUsers from './charts/TotalUsers';
import DeletedAccounts from './charts/DeletedAccounts';

export default class ChartData extends Component {
    state = {
        view: "", 
      }
      changeView = (newView) => {this.setState({ view: newView})}

    renderView = () => {    
        
    
        switch (this.state.view) {
    
          case 'MUV':
            return <MonthlyUniqueVisitors user={this.props.user} setUser={this.setUser} changeView={this.changeView} />
          case 'PQL':
            return <ProductQualifiedLeads setUser={this.setUser} changeView={this.changeView} />
          case 'sign ups':
            return <SignUps setUser={this.setUser} changeView={this.changeView} />
          case 'ARPA':
            return <AverageRevenuePerAccount setUser={this.setUser} changeView={this.changeView} />
          case 'total users':
            return <TotalUsers setUser={this.setUser} changeView={this.changeView} />
          case 'deleted accounts':
            return <DeletedAccounts setUser={this.setUser} changeView={this.changeView} />
          default: 
            return <MonthlyUniqueVisitors  user={this.state.user} setUser={this.setUser} changeView={this.changeView} />
    
        }
      }

    render() {
        return (
            <div className= "body">
                    <div className= "nav_container">
                        <div className= "nav_button" onClick= {()=> this.changeView("MUV")}>
                            <i className="fas fa-users"></i>
                            <h2>Monthly Unique Visitors</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("PQL")}>
                            <i className="fas fa-check-circle"></i>
                            <h2>Product Qualified Leads</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("sign ups")}>
                            <i class="fas fa-user-plus"></i>
                            <h2>Sign Ups</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("ARPA")}>
                            <i className="fas fa-money-bill-wave"></i>
                            <h2>Average Revenue Per Account</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("total users")}>
                            <i className="fas fa-project-diagram"></i>
                            <h2>Total Users</h2>
                        </div>
                        <div className= "nav_button" onClick= {()=> this.changeView("deleted accounts")}>
                            <i className="fas fa-user-times"></i>
                            <h2>Deleted Accounts</h2>
                        </div>
                    </div>
                    <div className= "body_content"> {this.renderView()}</div>
                </div>
        )
    }
}
