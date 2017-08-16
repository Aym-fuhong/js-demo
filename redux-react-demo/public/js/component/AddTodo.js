import React from 'react';

class AddTodo extends React.Component {
    add() {
        const text = this.refs.myInput.value;
        this.props.onAdd(text);
        this.refs.myInput.value = '';
    }

    render() {
        return <div>
            <input type="text" ref="myInput"/>
            <button onClick={this.add.bind(this)}>添加</button>
        </div>
    }
}
export default AddTodo;

