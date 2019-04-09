import React, { Component } from 'react';
import './App.css';
import apiURL from './config'
import GetUser from './GetUser'


// to do: gameroutes and logic.
class App extends Component {
  state = {
    name: "",
    highScore: 0
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    this.newUserInput()
    event.preventDefault()
    this.props.history.push("./question1")
  };

  newUserInput = async () => {
    await fetch(`${apiURL}/user`, {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <form>
        <div>
          {this.props.title} <br/>
          Name Please!
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Hayden"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div>
          <GetUser />
        </div>
      </form>
    );
  }
}

export default App;
