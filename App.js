import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getLocationAsync } from './utils/getLocation'
import NavBar from './components/navBar'
import WeatherContainer from './components/weatherContainer'

export default class App extends React.Component {

  state = {
    isLoading  : false,
    latitude   : '',
    longitude  : '',
  };

  async componentDidMount() {
    await getLocationAsync().then(d => {
      const { latitude, longitude } = d.coords;

      this.setState({
        latitude : latitude,
        longitude : longitude
      });
    });
    
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <WeatherContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});


