import React from 'react';

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos || [];
        const todoList = todos.map((todo, index) => {
            return <div key={index}><input type="checkbox" checked={todo.isDone}
                                           onClick={this.props.onToggle.bind(this, index)}/><span style={{
                "display": "inline",
                "textDecoration": todo.isDone ? "line-through" : ""
            }}>{todo.text}</span></div>
        });

        return <div>
            {todoList}
        </div>;
    }
}
export default TodoList;