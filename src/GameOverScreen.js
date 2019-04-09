import React, { Component } from 'react';

class GameOverScreen extends Component {
    homeScreen = () => {
        this.props.history.push("./")
    }
    render() {
        return (
            <div>
                <h2>GAME OVER?</h2>
                <h3>You couldn't get past that question?</h3>
                <p>That's okay. We are not all perfect and can sometimes fold under intense amounts
                    of pressure like taking this quiz. Relax, cooldown, and take a break. The quiz
                    will be here when you return. Remember we are on your side and want you to win.
                    Click the button to go back to the homescreen and see your score. Make a new
                    user and take the quiz. Have an embarassingly low score? Just delete it. Don't
                    like how high someone elses score is? Delete theirs as well.
                </p>
                <button onClick={this.homeScreen}>Cry</button>
            </div>
        )
    }
}

export default GameOverScreen