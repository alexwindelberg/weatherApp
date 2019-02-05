import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import WeatherContainer from './containers/WeatherContainer'
import { store } from './store'
//import { createStore } from 'redux'
//import reducer from './reducers'

//export const store = createStore(reducer);


export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <WeatherContainer />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

