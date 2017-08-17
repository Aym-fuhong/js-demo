export default function reducer(state = {todos: []}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            // state.todos.push({text: action.text, isDone: false});
            return [...state, {text: action.text, isDone: false}];
        case 'TOGGLE':
            state[action.index].isDone = !state[action.index].isDone;
            return [...state];
        case 'FILTER':
            state.splice(action.index, 1);
            return [...state];
        default: {
            return [...state];
        }

    }
}