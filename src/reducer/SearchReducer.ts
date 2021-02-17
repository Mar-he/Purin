const SearchReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                foods: action.foods.concat(state.foods)
            }
        case 'SET_FOOD':
            let returnObj = {
                ...state,
                foods: action.foods
            }
            console.log('SET_FOOD', returnObj)
            return returnObj
            
        case 'REMOVE_FOOD':
        default:
            console.warn("no known type hit. defaulting to state")
            return state;
    }
}

export default SearchReducer