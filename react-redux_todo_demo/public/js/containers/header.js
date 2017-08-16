import {connect} from 'react-redux';
import Header from '../component/Header';
import {onAdd} from '../actions/header';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    console.log('into aaaa');
    return {
        add: text => {
            dispatch(onAdd(text));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

