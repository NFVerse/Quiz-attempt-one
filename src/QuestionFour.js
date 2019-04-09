import React, { Component } from 'react';

class QuestionFour extends Component {
    cometoGameOver = () => {
        this.props.history.push("./GameOver")
    }
    toFive = () => {
        this.props.history.push("./Question5")
    }
    render(){
        return(
            <div>
                <h2>Well Done User! Question 4</h2>
                <p>The beginning of "Star Trek Deep Space Nine" makes frequent mention 
                    of a planet occupied by Cardassians. What planet was that?</p>
                <button onClick={this.toFive}>Bajor</button>
                <button onClick={this.cometoGameOver}>Betazed</button>
                <br/>
                <button onClick={this.cometoGameOver}>Betelgues ll</button>
                <button onClick={this.cometoGameOver}>Ba'ku</button>
            </div>
        )
    }
}
export default QuestionFour