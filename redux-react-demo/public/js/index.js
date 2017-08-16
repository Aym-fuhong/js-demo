import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import reducer from './reducers/reducer';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import Footer from './component/Footer';

const store = createStore(reducer);


class App extends React.Component {
    add(text) {
        store.dispatch({type: 'ADD', text});
    }

    toggle(index) {
        store.dispatch({type: 'TOGGLE', index});
    }

    filter(filterName) {
        store.dispatch({type: 'SET_FILTER', filterName})
    }

    filterTodos() {
        if (store.getState().filterName === "ALL") {
            return store.getState().todos;
        }
        else if (store.getState().filterName === "ACTIVE") {
            return store.getState().todos.filter(todo => !todo.isDone);
        } else {
            return store.getState().todos.filter(todo => todo.isDone);
        }
    }

    render() {
        return <div>
            <AddTodo onAdd={this.add}/>
            <TodoList todos={this.filterTodos()} onToggle={this.toggle.bind(this)}/>
            <Footer onFilter={this.filter} filterName={store.getState().filterName}/>
        </div>
    }
}


export default function renderFunction() {
    "use strict";
    render(<App/>, document.getElementById('root'))
}

store.subscribe(renderFunction);

renderFunction();

