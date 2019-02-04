import { combineReducers } from 'redux'

export default (state, action) => {

    console.log(action.currentLocation);
    switch (action.type) {

        case "SET_LOADING":
            return {
                ...state,
                isLoading : !action.loading
            }
        case "SET_CURRENT_LOCATION":
            return {
                ...state,
                currentLocation : action.currentLocation
            }
        default: 
            return state;
    }
}