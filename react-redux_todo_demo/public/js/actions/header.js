console.log("into action");
export const onAdd = text => {
    console.log("into action method");
    return {
        type: 'ADD_TODO',
        text
    }
};