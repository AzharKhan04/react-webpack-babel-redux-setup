import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <React.Fragment>
            <h1>Hello React App</h1>
        </React.Fragment>
    )
}


const rootElement = document.getElementById('root');


ReactDOM.render(<App/>,rootElement);