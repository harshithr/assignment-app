import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/ProfilePage/Profile.js';

class App extends Component {
  state = {
    data: ''
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  }

  render() {
    console.log(this.state.data);
    return (
      <Router>
        <div className="App">
          {/* <Cards userData={this.state.data} /> */}
          <Route path='/' exact render={(props) => <Cards userData={this.state.data} {...props} />} />
          <Route path="/profile/" render={(props) => <Profile userData={this.state.data} {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
