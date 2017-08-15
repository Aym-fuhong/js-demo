import * as React from 'react';
import './App.css';

interface P{
    onDelete: (index: any)=> void;
    onChange: (index: any)=> void;
    temp: any[];
}
class TodoList extends React.Component <P, {}>{
    delete(index: any) {
        this.props.onDelete(index);
    }

    change(index: any) {
        this.props.onChange(index);
    }

    render() {
        const items = this.props.temp.map((element, index) => {
            return <div key={index} className="todos">
                <input type="checkbox" checked={element.completed}
                       onClick={this.change.bind(this, index)}/>
                <span className="todo">{element.value}</span>
                <span className="glyphicon glyphicon-remove delete remove"
                      onClick={this.delete.bind(this, index)}></span>
            </div>
        });

        return <ul>
            {items}
        </ul>
    }
}

export default TodoList;
