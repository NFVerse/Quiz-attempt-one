import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import QuestionFive from './QuestionFive'
import GameOverScreen from './GameOverScreen'
import VictoryScreen from './VictoryScreen'
import App from './App'

class GameRoute extends Component {

        render() {
                return(
                <BrowserRouter> 
                        <div>
                                <Route path="/" exact component={App} />
                                <Route path="/question1" exact component={QuestionOne} />
                                <Route path="/question2" exact component={QuestionTwo} />
                                <Route path="/question3" exact component={QuestionThree} />
                                <Route path="/question4" exact component={QuestionFour} />
                                <Route path="/question5" exact component={QuestionFive} />
                                <Route path="/GameOver" exact component= {GameOverScreen} />
                                <Route path="/Victory" exact component= {VictoryScreen} />
                        </div>   
                </BrowserRouter>
                       
                )
        }
}

export default GameRoute