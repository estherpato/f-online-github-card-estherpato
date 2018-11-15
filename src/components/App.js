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
      selectOpen: false,
    }

    this.selectHandler = this.selectHandler.bind(this);
    this.arrowHandler = this.arrowHandler.bind(this);
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
        usersData
          .push(data)
          .sort((a, b) => (a.login.toLowerCase() > b.login.toLowerCase()) ? 1 : ((b.login.toLowerCase() > a.login.toLowerCase()) ? -1 : 0));
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

  arrowHandler() {
    if (!this.state.selectOpen) {
      this.setState({ selectOpen: true })
    } else {
      this.setState({ selectOpen: false })
    }
  }

  render() {
    const { adalabUsers, userSelected, selectOpen } = this.state;
    if (adalabUsers.length === 75) {
      return (
        <div className="App">
          <i className="fab fa-github"></i>
          <SelectUser
            adalabUsers={adalabUsers}
            selectHandler={this.selectHandler}
            selectOpen={selectOpen}
            arrowHandler={this.arrowHandler}
          />
          <UserCard
            adalabUsers={adalabUsers}
            userSelected={userSelected}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <i className="fab fa-github"></i>
          <div className="loading-container">
            <img src="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif" alt="gif espera" />
            <p>Cargando la lista de usuarios...</p>
          </div>
        </div>
      );
    }
  }
}

export default App;
