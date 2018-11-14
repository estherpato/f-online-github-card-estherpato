import React, { Component } from 'react';
import SelectUser from './SelectUser.js';
import UserCard from './UserCard.js';
import '../stylesheets/App.css';
const usersData = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adalabUsers: JSON.parse(localStorage.getItem("users")) || [],
      userSelected: '',
    }

    this.selectHandler = this.selectHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.adalabUsers.length === 0) {
      this.getUsers();
    }
  }

  getUsers() {
    fetch('https://api.github.com/orgs/adalab/members?per_page=75')
      .then(res => res.json())
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          this.getUserData(users[i].url)
        }
      })
  }

  getUserData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        usersData.push(data)
        usersData.sort((a, b) => (a.login > b.login) ? 1 : ((b.login > a.login) ? -1 : 0));
        this.setState({ adalabUsers: [...usersData] })
        this.setLocalStorage(usersData)
      })
  }

  setLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  selectHandler(e) {
    this.setState({ userSelected: e.target.value })
  }

  render() {
    const { adalabUsers, userSelected } = this.state
    return (
      <div className="App">
        <SelectUser
          adalabUsers={adalabUsers}
          selectHandler={this.selectHandler}
        />
        <UserCard
          adalabUsers={adalabUsers}
          userSelected={userSelected}
        />
      </div>
    );
  }
}

export default App;
