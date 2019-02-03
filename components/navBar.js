import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const navigationBar = () => {
    return (
        <View>
          <View style={styles.toolbar}>
              <Text style={styles.toolbarButton}></Text>
              <Text style={styles.toolbarTitle}>Alex Weather App</Text>
              <Text style={styles.toolbarButton}>City</Text>
          </View>
        </View>
      );
}

var styles = StyleSheet.create({
  toolbar:{
      backgroundColor:'#81c04d',
      paddingTop:30,
      paddingBottom:10,
      flexDirection:'row',   //Step 1
      height : 70
  },
  toolbarButton:{
      width: 50,            //Step 2
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:1                //Step 3
  }
});
  
  

export default navigationBar;