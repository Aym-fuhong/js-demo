export const onToggle = index => {
    return {
    type: "TOGGLE",
    index
}
};

export const onDelete = index => {
    return {
        type: "FILTER",
        index
    }
};