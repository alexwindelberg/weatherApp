import { combineReducers } from 'redux'
//latitude, longitude, 
const initialState = { 
    isLoading        : true,
    currentLocation  : {},
    weatherList      : [],
    cities           : [], 
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading : !state.isLoading
            }
        case 'SET_CURRENT_LOCATION':
            return {
                ...state,
                currentLocation : Object.assign({}, action.c_location)
            }
    }

    return state;
}