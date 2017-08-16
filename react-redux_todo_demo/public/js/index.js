import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from './reducers/header';
import {App} from './containers/App';


const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// ReactDOM.render(<Header/>, document.getElementById("root"));