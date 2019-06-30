export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
              ...state,
              {id: action.id, name: action.name}
            ]

        case 'REMOVE_ITEM':
            return state.filter(({ id }) => id !== action.id)

        default:
            return state
    }
};
