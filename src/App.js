import React, { Component } from "react";
import './App.css';
 class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: [],
      searchInput: '',
     
       
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((list) => {
        this.setState({ isLoading: false, users: list });
      });
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

 

  render() {
    if (this.state.isLoading) {
      return <div className='App'>Loading...</div>;
    }

    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
    });

    return (
      <div className='App'>
       
        <h1>List of Users:</h1>
        <div>
          
          {/* <input type = 'text' onchange={(e) => console.log(e.target.value)} */}
          <input class='input' type='text' placeholder=' searching by name or username and email!!!' value={this.state.searchInput}onChange={(this.handleChange)}
          /> 
          
        </div>
       
        {filteredUsers.map((user) => {
          return <h1 className='hh' key={user.id}> Name:{user.name}, Email:{user.email}, Username:{user.username} </h1>;
        })}
      </div>
    );
  }
}
export default App;







