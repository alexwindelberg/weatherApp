import { AsyncStorage } from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'

import reducer from '../reducers'

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
   
  export const store = createStore(persistedReducer, applyMiddleware(logger)); // applyMiddleware(logger)
  
  export const persistor = persistStore(store);
