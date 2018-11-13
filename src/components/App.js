import React, { Component } from 'react';
import SelectUser from './SelectUser.js';
import '../stylesheets/App.css';
// const url = https://api.github.com/orgs/adalab/members?per_page=75;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adalabUsers: JSON.parse(localStorage.getItem("users")) || [],
    }
  }

  componentDidMount() {
    // if (this.state.adalabUsers.length === 0) {
      this.getUsers();
    // }
  }

  getUsers() {
    fetch('https://api.github.com/orgs/adalab/members?per_page=75')
      .then(res => res.json())
      .then(users => {
        console.log(users)
        for(let i = 0; i < users.length ; i++)
        {  
        this.getUserData(users[i].url)
      }
        // this.setLocalStorage(users)
      })
  }

  getUserData(url) {
    fetch(url)
    .then(res => console.log(res))
    // .then(data => {
    //   this.getUserRepos(data.repos_url)
    //   this.getUserFollowers(data.followers_url)
    //   this.getUserFollowing(data.following.url)
    // })
  }

  getUserRepos(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('user repo', data)
    })
  }

  getUserFollowers(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('user followers', data)
    })
  }

  getUserFollowing(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('user following', data)
    })
  }

  setUserArray() {

  }

  setLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  render() {
    return (
      <div className="App">
        <SelectUser adalabUsers={this.state.adalabUsers} />
      </div>
    );
  }
}

export default App;
