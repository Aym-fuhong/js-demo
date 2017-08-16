// import React from 'react';
//
// class TodoList extends React.Component {
//     render() {
//         return <div>
//             {this.props.todos.map((todo, index) => {
//                 return <div key={index}><input type="checkbox" checked={todo.isDone} onClick={this.props.onToggle.bind(this, index)}/><span style={{
//                     "display": "inline",
//                     "textDecoration": todo.isDone ? "line-through" : ""
//                 }}>{todo.text}</span></div>
//             })}
//         </div>
//     }
// }
// export default TodoList;