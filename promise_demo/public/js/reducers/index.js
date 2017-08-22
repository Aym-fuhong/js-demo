import { combineReducers } from 'redux';
import header from './header'
import footer from './footer';
import form from './form'

const todoApp = combineReducers({
    header,
    footer,
    form
});

export default todoApp