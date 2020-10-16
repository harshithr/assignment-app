import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Profile from './components/ProfilePage/Profile.js';
import Posts from './components/ProfilePage/Posts.js';
import Gallery from './components/GalleryPage/Gallery.js';
import Todo from './components/TodoPage/Todo.js';

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
          {/* <Route path="/profile/" exact strict render={(props) => <Profile userData={this.state.data} {...props} />} /> */}
          <Route path={`/profile/id=1`} exact component={Profile} />
          <Route path={`/profile/id=2`} exact component={Profile} />
          <Route path={`/profile/id=3`} exact component={Profile} />
          <Route path={`/profile/id=4`} exact component={Profile} />
          <Route path={`/profile/id=5`} exact component={Profile} />
          <Route path={`/profile/id=6`} exact component={Profile} />
          <Route path={`/profile/id=7`} exact component={Profile} />
          <Route path={`/profile/id=8`} exact component={Profile} />
          <Route path={`/profile/id=9`} exact component={Profile} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/todo" exact component={Todo} />
        </div>
      </Router>
    );
  }
}

export default App;
