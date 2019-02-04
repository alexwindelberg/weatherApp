import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import reducer from './reducers'
import { getLocationAsync } from './utils/getLocation'
import { getWeatherAsync } from './utils/getWeather'
import NavBar from './components/navBar'
import WeatherContainer from './components/weatherContainer'


const initialState = { isLoading : true, latitude : '', longitude : '', weatherList : [] };
const store = createStore(reducer, initialState);

export default class App extends React.Component {

  async componentDidMount() {
    
    /*await getLocationAsync().then(d => {
      const { latitude, longitude } = d.coords;

      this.setState({
        latitude : latitude,
        longitude : longitude,
      });
    });

    await getWeatherAsync(this.state.longitude, this.state.latitude).finally( (data) => {
      this.setState({
        isLoading : false
      });
      console.log(data);
    });*/


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


