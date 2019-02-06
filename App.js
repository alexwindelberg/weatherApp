import React from 'react'
import { ActivityIndicator } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import WeatherContainer from './containers/WeatherContainer'
import { store, persistor } from './store'


export default class App extends React.Component {

  renderLoading = () => (
      <ActivityIndicator size="large" />
  )

  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={this.renderLoading()} persistor={persistor}>
              <WeatherContainer />
          </PersistGate>
        </Provider>
    );
  }
}

