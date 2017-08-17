import {connect} from 'react-redux';
import Footer from '../component/Footer';
import {onFilter} from '../actions/footer';

const mapStateToProps = state => {
    return {
        filterName: state.footer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFilter: filterName => {
            dispatch(onFilter(filterName));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);