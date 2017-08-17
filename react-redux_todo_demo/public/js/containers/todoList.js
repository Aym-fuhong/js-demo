import {connect} from 'react-redux';
import TodoList from '../component/TodoList';
import {onToggle, onDelete} from '../actions/todoList';

const mapStateToProps = (state) => {
    console.log(state, 'container state');
    return {
        todos: state.header
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggle: index =>
    dispatch(onToggle(index)),

        onDelete: index =>
        dispatch(onDelete(index))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

