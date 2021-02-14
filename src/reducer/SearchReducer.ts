const SearchReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                foods: action.foods.concat(state.foods)
            }
        default:
            console.warn("no known type hit. defaulting to state")
            return state;
    }
}

export default SearchReducer