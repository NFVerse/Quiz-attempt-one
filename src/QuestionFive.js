import React, { Component } from 'react';

class QuestionFive extends Component {
    cometoGameOver = () => {
        this.props.history.push("./GameOver")
    }
    toVictoryScreen = () => {
        this.props.history.push("./Victory")
    }
    render(){
        return(
            <div>
                <h2>Well Done User! Last Question!</h2>
                <p>What is scotlands national animal?</p>
                <button onClick={this.cometoGameOver}>Dragon</button>
                <button onClick={this.toVictoryScreen}>Unicorn</button>
                <br/>
                <button onClick={this.cometoGameOver}>Mermaid</button>
                <button onClick={this.cometoGameOver}>Cat</button>
            </div>
        )
    }
}
export default QuestionFive