import React from 'react';

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos || [];
        const todoList = todos.map((todo, index) => {
            return <div key={index}><input type="checkbox" checked={todo.isDone}
                                           onChange={this.props.onToggle.bind(this, index)}/><span style={{
                "display": "inline",
                "textDecoration": todo.isDone ? "line-through" : ""
            }}>{todo.text}</span>
            <input type="button" value="delete" onClick={this.props.onDelete.bind(this, index)}/>
            </div>
        });

        return <div>
            {todoList}
        </div>;
    }
}
export default TodoList;