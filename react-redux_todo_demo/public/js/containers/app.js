import {connect} from 'react-redux';
import Header from '../component/Header';

const mapStateToProps = state => {
    // return {
    //     todos: getVisibleTodos(state.todos, state.visibilityFilter)
    // }
};

const mapDispatchToProps = dispatch => {
    // return {
    //     onTodoClick: id => {
    //         dispatch(toggleTodo(id))
    //     }
    // }
};

const AddTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default AddTodoList