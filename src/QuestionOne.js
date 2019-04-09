import React, { Component } from 'react';
// import { handleSubmit } from './Updateuser'
import apiURL from './config'

class QuestionOne extends Component {
    state = {
        highScore: 1
    }
    cometoGameOver = () => {
        this.props.history.push("./GameOver")
    }
    
    toTwo = async () => {
        await this.handleSubmit()
        .then(this.props.history.push("./Question2"))
        .then(console.log(this.state.highScore))
        
    }
    handleSubmit = async () => {
        await fetch(`${apiURL}/user/${this.props.User._id}`, {
            method : "PUT",
            body: JSON.stringify(this.state.highScore)
        })
        .then( res => console.log(res.json()))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <h2>Good Morning User! Answer the five questions and beat the game!</h2>
                <p>How many people play Minecraft every month?</p>
                <button onClick= {this.toTwo}>55 Million</button>
                <button onClick= {this.cometoGameOver}>46 Million</button>
                <br/>
                <button onClick= {this.cometoGameOver}>72 Million</button>
                <button onClick= {this.cometoGameOver}>23 Million</button>
            </div>
        )
    }
}
export default QuestionOne