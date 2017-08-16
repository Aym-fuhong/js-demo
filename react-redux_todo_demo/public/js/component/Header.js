import React from 'react';

class Header extends React.Component {

    onAdd() {
        let text = this.inputText.value;
        this.props.add(text);
    }

    render() {
        return <div>
            <input type="text" ref={(text) => this.inputText = text}/>
            <button onClick={this.onAdd.bind(this)}>添加</button>
        </div>
    }
}

export default Header;

