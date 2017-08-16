export default function reducer(state = {todos: []}, action){
    switch (action.type){
        case 'ADD_TODO':
            state.todos.push({text: action.text, isDone: false});
            console.log(state.todos,'--------');
            return state;
    }
    return state;
}