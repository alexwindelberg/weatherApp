import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NavigationBar extends Component {
    render () {
    return (
        <View>
          <View style={styles.toolbar}>
              <Text style={styles.toolbarButton}>Home</Text>
              <Text style={styles.toolbarTitle}>Alex Weather App</Text>
              <Text style={styles.toolbarButton}>City</Text>
          </View>
        </View>
      );
    }
}

var styles = StyleSheet.create({
  toolbar:{
      backgroundColor:'orange',
      paddingTop:30,
      paddingBottom:10,
      flexDirection:'row',   
      height : 80
  },
  toolbarButton:{
      width: 50,            
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:1               
  }
});
  
  

export default NavigationBar;