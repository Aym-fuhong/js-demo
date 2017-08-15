import * as React from 'react';
import Input from './Input';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import './App.css';

interface S {
    list: any[],
    temp: any[]
}
class App extends React.Component <{}, S> {
    constructor() {
        super();
        this.state = {
            list: [],
            temp: []
        };
    }

    addEvent(event: any, value: any): void {
        if (event.key != "Enter") {
            return;
        }
        if (event.key === "Enter" && value === '') {
            alert("can't input empty task");
            return;
        }

        const todolist = this.state.list;
        const todo = {
            completed: false,
            value: value
        };
        todolist.push(todo);
        this.setState({temp: todolist});
    }

    deleteEvent(index: any): void {
        const todolist = this.state.list;
        todolist.splice(index, 1);
        this.setState({temp: todolist});
    }

    changeState(index: any): void {
        const todolist = this.state.list;
        todolist[index].completed = !todolist[index].completed;
        this.setState({temp: todolist});
    }

    completed(): void {
        let temp = this.state.list;
        temp = temp.filter(todo => todo.completed);
        this.setState({temp});
    }

    all(): void {
        this.setState({temp: this.state.list});
    }

    active(): void {
        let temp = this.state.list;
        temp = temp.filter(todo => !todo.completed);
        this.setState({temp});
    }

    render() {
        return <div className="center-block">
            <Header/>
            <Input onAdd={this.addEvent}/>
            <TodoList temp={this.state.temp} onDelete={this.deleteEvent} onChange={this.changeState}/>
            <Footer onCompleted={this.completed} onAll={this.all} onActive={this.active}
                    elements={this.state.list}/>
        </div>
    }
}

export default App;
