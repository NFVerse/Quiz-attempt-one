import React, { Component } from 'react';

class QuestionTwo extends Component {
    cometoGameOver = () => {
        this.props.history.push("./GameOver")
    }
    toThree = () => {
        this.props.history.push("./Question3")
    }
    render(){
        return(
            <div>
                <h2>Well Done User! Question 2</h2>
                <p>In the most recent expansion of World of Warcraft (Battle for Azeroth) 
                        how many zones are in the game?</p>
                <button onClick={this.cometoGameOver}>848</button>
                <button onClick={this.cometoGameOver}>637</button>
                <br/>
                <button onClick={this.toThree}>742</button>
                <button onClick={this.cometoGameOver}>783</button>
            </div>
        )
    }
}
export default QuestionTwo