import React from 'react';

class Header extends React.Component {

    render() {
        return <div>
            <input type="text" ref="myInput"/>
            <button>添加</button>
        </div>
    }
}
export default Header;

