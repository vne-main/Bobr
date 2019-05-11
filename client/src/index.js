import React from 'react';
import ReactDOM from 'react-dom';
import './Static/css/index.css';
import App from './App';

/* Redux */
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Store/Reducers/index';

export const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);