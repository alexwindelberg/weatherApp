import React from 'react'
import { ActivityIndicator } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store/index'
import MainNavContainer from './navigator/index'



export default class App extends React.Component {

  renderLoading = () => (
      <ActivityIndicator size="large" />
  )

  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={this.renderLoading()} persistor={persistor}>
              <MainNavContainer />
          </PersistGate>
        </Provider>
    );
  }
}

