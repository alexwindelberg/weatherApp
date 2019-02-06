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
                currentFocusedWeather      : Object.assign({}, action.cl_weather),
            }
        case 'ADD_WEATHER_DETAILS_TO_LIST'         :
            return {
                ...state,
                weatherList                : state.weatherList.concat({ uniqueId: new Date(), cityWeather: action.storeCityDetails })
            }
        case 'DUMMY_DATA'   : {
            return {
                ...state,
                weatherList   :  new Array("New York", "Miami", "Orlando") 
            }
        }
    }

    return state;
}