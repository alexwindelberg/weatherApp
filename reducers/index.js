import { combineReducers } from 'redux'
//latitude, longitude, 
const initialState = { 
    isLoading                : true,
    currentLocation          : {},
    localWeather             : {},
    weatherList              : [],
    listCounter              :  1,
};

/*
    SET_CURRENT_LOCATION         - Sets the longitude and latitude into currentLocation 
                                   as an object - {latitude, longitude}
    ADD_CURRENT_WEATHER_DETAILS  - Sets the weather details into localWeather as an 
                                   object based on the coordinates of the user - { icon, wId, temp, }
*/

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
        case 'ADD_LOCAL_WEATHER_DETAILS' : 
            return {
                ...state,
                localWeather               : Object.assign({}, action.cl_weather),
            }
        case 'ADD_LOCAL_WEATHER_LIST' : 
            return {
                ...state,
                weatherList                : state.weatherList.concat({ uniqueId: state.listCounter, cityWeather: Object.assign(state.currentLocation, state.localWeather)}),
                listCounter                : state.listCounter + 1,
            }
        case 'ADD_CITY'         :
            return {
                ...state,
                weatherList                : state.weatherList.concat({ uniqueId: state.listCounter, cityWeather: action.addCity }),
                listCounter                : state.listCounter + 1,
            }
        case 'RESET'   : {
            return {
                ...state,
                weatherList                : [],
                listCounter                : 0
            }
        }
    }

    return state;
}