import { combineReducers } from 'redux'
//latitude, longitude, 
const initialState = { 
    isLoading                : true,
    currentLocation          : {},
    currentFocusedWeather    : {},
    weatherList              : [],
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_LOADING'                 :
            return {
                ...state,
                isLoading                  : !state.isLoading
            }
        case 'SET_CURRENT_LOCATION'        :
            return {
                ...state,
                currentLocation            : Object.assign({}, action.c_location)
            }
        case 'ADD_CURRENT_WEATHER_DETAILS' : 
            return {
                ...state,
                currentFocusedWeather      : Object.assign({}, action.cl_weather)
            }
        case 'ADD_WEATHER_DETAILS'         :
            // In the near future we have to check that we aren't adding
            // Cities already in the array 
            return {
                ...state,
                weatherList                : state.weatherList.concat(action.a_weather)
            }
    }

    return state;
}