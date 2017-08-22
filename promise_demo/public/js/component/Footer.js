import React from 'react';

class Footer extends React.Component {

    render() {
        const links = ['ALL', 'ACTIVE', 'COMPLETED'].map((filterName, index) => {
            return <a key={index} style={{"textDecoration": this.props.filterName === filterName ? "underline" : ""}}
                      onClick={this.props.onFilter.bind(this, filterName)}>{filterName}&nbsp;&nbsp;</a>
        });
        return <div>
            {links}
        </div>
    }
}
export default Footer;