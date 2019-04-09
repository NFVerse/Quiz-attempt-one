import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GameRoute from './GameRoute'


   

ReactDOM.render(<GameRoute />, document.getElementById('root'));
serviceWorker.unregister();
