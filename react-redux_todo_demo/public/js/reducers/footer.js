export default function reducer(state = {filterName: 'ALL'}, action) {
    switch (action.type) {
        case 'FILTER_NAME':
            state = action.filterName;
            return state;
    }
    return state;
}