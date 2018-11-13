import React, { Component } from 'react';
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
    if (this.state.adalabUsers.length === 0) {
      this.getUsers();
    }
  }

  getUsers() {
    fetch('https://api.github.com/orgs/adalab/members?per_page=75')
      .then(res => res.json())
      .then(users => {
        this.setState({ adalabUsers: users })
        this.setLocalStorage(users)
      })
  }

  setLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
