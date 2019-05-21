import React from 'react';
import ReactDOM from 'react-dom';
import './Static/css/index.css';
import App from './App';

/* Redux */
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from './Store/Reducers/index';

/* Saga */
import createSagaMiddleware from 'redux-saga';
import mySaga from './Store/Sagas';
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);

/* Render */
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);