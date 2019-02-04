import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherDetails from './weatherDetails'

const ShowWeather = () => {
        return (    
            <View style={styles.content}>      
               <WeatherDetails />
            </View>
        );
}

const styles = StyleSheet.create({
    content:{
        backgroundColor :  '#ebeef0',
        flex            :  1,
        alignItems      :  'center'    
    }
});


export default ShowWeather; 