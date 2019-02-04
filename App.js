import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getLocationAsync } from './utils/getLocation'
import { getWeatherAsync } from './utils/getWeather'
import NavBar from './components/navBar'
import WeatherContainer from './components/weatherContainer'

export default class App extends React.Component {

  state = {
    isLoading  : true,
    latitude   : '',
    longitude  : '',
    weatherConditions : [],
  };

  async componentDidMount() {
    
    await getLocationAsync().then(d => {
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
    });

  }


  render() {
    return (
      <View style={styles.container}>
        <NavBar />

        { this.state.isLoading ? 
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


