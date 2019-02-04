import { createStore } from 'redux'
import reducer from '../reducers'

//latitude, longitude, 
const initialState = { 
        isLoading : true,
        currentLocation : {}, 
        weatherList : [],
        cities : [], 
    };

export const store = createStore(reducer, initialState);