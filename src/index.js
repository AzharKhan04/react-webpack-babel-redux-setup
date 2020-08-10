import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './reduxStore'

const App = () => {
    return (
        <Provider store = {store}>
            <h1>Hello React App</h1>
        </Provider>    
    )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<App/>,rootElement);