import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getLocationAsync } from './utils/locationPermission'

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
        <Text> This is the results = {this.state.longitude} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 40
  },
});
