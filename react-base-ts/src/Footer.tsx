import * as React from 'react';
import './App.css';

interface P {
    elements: any;
    onAll: () => any;
    onCompleted: () => any;
    onActive: () => any;
}

class Footer extends React.Component<P, {}> {
    render() {
        const element = this.props.elements.map((element: any) =>
            (element.completed ? 0 : 1)).reduce((a: any, b: any) => (a + b), 0);
        return <div className="text-center footer">
            <button className="left">{element} items left</button>
            <button className="all" onClick={this.props.onAll}>all</button>
            <button className="completed" onClick={this.props.onCompleted}>Completed</button>
            <button className="active" onClick={this.props.onActive}>active</button>
        </div>
    }
}

export default Footer;
