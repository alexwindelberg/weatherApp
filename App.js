import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getLocationAsync } from './utils/getLocation'
import { getWeatherAsync } from './utils/getWeather'
import NavBar from './components/navBar'
import WeatherContainer from './components/weatherContainer'
import { store } from './store'
import { _setLoading, _setCurrentLocation } from './actions';


export default class App extends React.Component {

  async componentDidMount() {
    
    await getLocationAsync().then(d => {
        const { latitude, longitude } = d.coords;
        dispatchCurrentLocation(latitude, longitude);
    });

    await getWeatherAsync(store.getState().currentLocation.latitude, store.getState().currentLocation.longitude).finally( (data) => {
        dispatchLoadingAction();
    });
  }

  componentWillMount () {

  }


  render() {
    return (
      <View style={styles.container}>
        <NavBar />

        { store.getState().isLoading ? 
          (
            <Text>Loading...</Text>
          ) : 
          (
            <WeatherContainer />
          )
         }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function dispatchLoadingAction() {
  store.dispatch(_setLoading(store.getState().isLoading));
}

function dispatchCurrentLocation(lat, lon) {
  const location = {
          latitude     : lat,
          longitude    : lon
  };
  store.dispatch(_setCurrentLocation(location));
}
