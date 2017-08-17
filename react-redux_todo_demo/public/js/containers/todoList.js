import {connect} from 'react-redux';
import TodoList from '../component/TodoList';
import {onToggle, onDelete} from '../actions/todoList';

const mapStateToProps = (state) => {
    return {
        todos: getFilterList(state.header, state.footer)
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

function getFilterList(todos, filterName) {
    switch(filterName){
        case 'ACTIVE': return todos.filter(todo => todo.isDone === true);
        case 'COMPLETED': return todos.filter(todo => todo.isDone === false);
        default: return todos;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

