export default function reducer(state = {userInfo: {}}, action) {
    switch (action.type) {
        case 'USER_INFO':
            state = action.userInfo;
            console.log(state, 'reducer state----');
            return state;
    }
    return state;
}