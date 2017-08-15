import * as React from 'react';
import './App.css';


interface P {
   onAdd:(event: any, value: any) => any;
}

class Input extends React.Component <P, {}>{

    onAdd(event: any) {
        let value = (this.refs['addTask'] as any as HTMLInputElement).value.trim();
        // let value = this.refs.addTask.value;
        this.props.onAdd(event, value);
    }

    render() {
        return <div className="inputBox text-center">
            <label>
                <input type="text" ref="addTask" placeholder="what needs to be done"
                       onKeyPress={this.onAdd.bind(this)}/>
            </label>
        </div>
    }
}

export default Input;
