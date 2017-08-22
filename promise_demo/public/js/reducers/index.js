import { combineReducers } from 'redux';
import header from './header'
import footer from './footer';

const todoApp = combineReducers({
    header,
    footer
});

export default todoApp