import React, { Component } from 'react';
class VictoryScreen extends Component {
    homeScreen = () => {
        this.props.history.push("./")
    }
    render() {
        return(
            <div>
                <h2>Congratumatations!</h2>
                <p>Unbelievable. I never thought anyone could complete that intense 5 questions quiz.
                    Heck at one point I couldn't even complete it. Way to go. Click the button to see 
                    how you compare to everyone else</p>
                <button onClick ={this.homeScreen}>WINNER WINNER!</button>
            </div>
        )
    }
}
export default VictoryScreen