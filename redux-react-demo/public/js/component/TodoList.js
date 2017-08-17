import React from 'react';

class TodoList extends React.Component {
    render() {
        let todos = this.props.todos || [];
        const list = todos.map((todo, index) => {
            return <div key={index}><input type="checkbox" checked={todo.isDone} onClick={this.props.onToggle.bind(this, index)}/><span style={{
                "display": "inline",
                "textDecoration": todo.isDone ? "line-through" : ""
            }}>{todo.text}</span>
                <input type="button" value="delete" onClick={this.props.onDelete.bind(this, index)}/>
            </div>
        });
        return <div>
            {list}
        </div>
    }
}
export default TodoList;