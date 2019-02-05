import { combineReducers } from 'redux'
//latitude, longitude, 
const initialState = { 
    isLoading        : true,
    currentLocation  : {},
    weatherList      : [],
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_LOADING'         :
            return {
                ...state,
                isLoading          : !state.isLoading
            }
        case 'SET_CURRENT_LOCATION':
            return {
                ...state,
                currentLocation    : Object.assign({}, action.c_location)
            }
        case 'SET_WEATHER_CL'      :
            // In the near future we have to check that we aren't adding
            // Cities already in the array 
            return {
                ...state,
                weatherList        : state.results.push(action.cl_weather)
            }
    }

    return state;
}