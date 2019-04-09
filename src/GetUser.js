import React, { Component } from 'react';
import apiURL from './config'

class GetUser extends Component {
  state = {
    users: [],
    highScore: 0
  };

  getUserScore = async () => {
    await fetch(`${apiURL}/user`)
    .then(response => response.json())
    .then(data => data.map(element => <h2 key={element._id}>{element.name} {element.highScore}/5</h2>))
    .then(components => this.setState({ users : components }))
    .catch( err => console.log(err))
  };
 
  componentDidMount() {
    this.getUserScore()
};

  render() {
    return (
        <div>
          Participants and Scores: {this.state.users}
        </div>
    );
  }
}

export default GetUser;