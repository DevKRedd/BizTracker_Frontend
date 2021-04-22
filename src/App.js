import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import { createMedia } from '@artsy/fresnel';




const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

class App extends Component {

  state = {
    view: "", 
    user: {}, 

  }
  setUser = (userObj) => {
    this.setState({
      user: userObj
    })
  }

  componentDidMount(){
    if(localStorage.getItem("token")) {
      if(localStorage.getItem("user")) {
        let userObject = JSON.parse(localStorage.getItem("user"))
          this.setUser(userObject)
      }
    }
  }
  

  changeView = (newView) => {this.setState({ view: newView})}

  renderView = () => {    
    

    switch (this.state.view) {

      case 'login':
        return <Login user={this.state.user} setUser={this.setUser} changeView={this.changeView} />
      case 'signup':
        return <SignUp setUser={this.setUser} changeView={this.changeView} />
      case 'dashboard':
        return <Dashboard user={this.state.user} setUser={this.setUser} changeView={this.changeView} />
      case 'homepage':
        return <HomePage setUser={this.setUser} changeView={this.changeView} />
      default: 
        return <HomePage  user={this.state.user} setUser={this.setUser} changeView={this.changeView} />

    }
  }



    
    
  render(){
    return (
  
      <div className="App">
       
        {this.renderView()}
        
      </div>
    );
  }
}

export default App;
