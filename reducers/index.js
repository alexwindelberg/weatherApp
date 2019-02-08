import { combineReducers } from 'redux'
//latitude, longitude, 
const initialState = { 
    currentLocation          : {},
    localWeather             : {},
    weatherList              : [],
    listCounter              :  1,
    focusedCity              : [],
    focusListCounter         :  1,
    focusedCurrent           :  {}
};

/*
    SET_CURRENT_LOCATION         - Sets the longitude and latitude into currentLocation 
                                   as an object - {latitude, longitude}
    ADD_CURRENT_WEATHER_DETAILS  - Sets the weather details into localWeather as an 
                                   object based on the coordinates of the user - { icon, wId, temp, }
*/

export default (state = initialState, action) => {

    switch (action.type) {
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
        case 'FOCUSED_CITY'     :
            return {
                ...state,
                focusedCity     :       state.focusedCity.concat({ uniqueId: state.focusListCounter, cityWeather : Object.assign({}, action.cityinfo)}),
                focusListCounter:       state.focusListCounter + 1,
            }
        case 'FOCUSED_CURRENT'  :
            return {
                ...state,
                focusedCurrent   :      Object.assign({}, action.cFocused),
            }
        case 'DELETE_CITY'   : { // delete city tuple
                return {
                    ...state,
                    focusedCity           : [],
                    focusListCounter      : 0,
                }
            }
        case 'CLEAR_CITY_DATA'   : {
                return {
                    ...state,
                    focusedCity          : [],
                    focusListCounter      : 0,
                }
            }
        case 'RESET'   : {
            return {
                currentLocation          : {},
                localWeather             : {},
                weatherList              : [],
                listCounter              :  1,
                focusedCity              : [],
                focusListCounter         :  1,
                focusedCurrent           :  {},
            }
        }
    }

    return state;
}