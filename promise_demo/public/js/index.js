import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from "react-redux";
import reducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import {App} from './containers/App';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

