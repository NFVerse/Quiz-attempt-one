import React, { Component } from 'react';

class QuestionThree extends Component {
    cometoGameOver = () => {
        this.props.history.push("./GameOver")
    }
    toFour = () => {
        this.props.history.push("./Question4")
    }
    render(){
        return(
            <div>
                <h2>Well Done User! Question 3</h2>
                <p>In the game League of Legends which of these is not an ability in the game?</p>
                <button onClick={this.cometoGameOver}>Sonic Wave</button>
                <button onClick={this.cometoGameOver}>Dark Passage</button>
                <br/>
                <button onClick={this.cometoGameOver}>Ruthless Predator</button>
                <button onClick={this.toFour}>Roll the Dice</button>
            </div>
        )
    }
}
export default QuestionThree