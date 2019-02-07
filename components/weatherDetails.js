import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image } from 'react-native';

class WeatherDetails extends Component {

    render () {
        return (
            <View style={styles.weatherBox}>
                <View> 
                    <Text style={styles.weatherDetailsBox}>  { Math.ceil(this.props.currentWeather.temp) }° </Text>
                    <Text style={styles.locationDetails}  >  { this.props.currentWeather.cityInfo } </Text>
                </View>
                <View>
                    <Image style={{width: 50, height: 50, marginLeft: 100}} source={{uri: "http://openweathermap.org/img/w/" + this.props.currentWeather.icon + ".png" }} />
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    weatherBox          : {
        backgroundColor : '#f4511e',
        width           : 'auto',
        paddingTop      : 10,
        paddingBottom   : 5,
        paddingLeft     : 20,
        paddingRight    : 20,
        height          : 100,
        flexDirection   : 'row',
    },
    weatherDetailsBox   : {
        fontWeight      : 'bold',
        color           : '#fff',
        textAlign       : 'left',
        fontSize        : 30,
        marginBottom    : 3,
    },
    locationDetails     : {
        color           : '#fff',
        fontSize        : 16,
        marginLeft      : 6
    }
});

const mapStateToProps = state => {
    return {
        current_local   : state.currentLocation,
        currentWeather  : state.localWeather,
    };
};

export default connect(mapStateToProps)(WeatherDetails);