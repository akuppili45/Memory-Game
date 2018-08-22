export const playerOne = (state={matches:0}, action) => {
    switch(action.type){
        case ADD_POINT:
            return {...state, matches: state.matches + 1}
        default: return state;
    }
}
export const playerTwo = (state={matches:0}, action) => {
    switch(action.type){
        case ADD_POINT:
            return {...state, matches: state.matches + 1}
        default: return state;
    }
}
