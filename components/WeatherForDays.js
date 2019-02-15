import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'

class WeatherForDays extends Component {
    
    componentWillUnmount() {
        this.props.resetData()
    }

    DayOfTheWeek (NumOfDay) {
        switch (NumOfDay) {
            case 0 :
                return "Monday"
            case 1 :
                return "Tuesday"
            case 2 :
                return "Wednesday"
            case 3 :
                return "Thurday"
            case 4 : 
                return "Friday"
            case 5 :
                return "Saturday"
            case 6 :
                return "Sunday"
            default :
                return "N/A"
        }
    }

    render () {
        return (
            <View style={styles.weatherBox}>
                <ScrollView horizontal={true}>
                    {
                        this.props.currentWeather.map(data => {
                            return ( 
                                    <View style={styles.weatherDetailsBox} key={data.uniqueId}>
                                        <Image style={{width: 50, height: 50, marginLeft: 50}} source={{uri: "http://openweathermap.org/img/w/" + data.cityWeather.icon + ".png" }} />
                                        <Text style={styles.dayText}> { this.DayOfTheWeek(data.cityWeather.objDate) } </Text>
                                        <View style={{marginTop: 10}}>
                                            <Text style={styles.weatherText}>{ Math.round(data.cityWeather.temp)}°</Text> 
                                        </View>
                                    </View>
                            )
                        })
                    }
                </ScrollView>
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
        height          : 170,
        flexDirection   : 'row',
    },
    weatherDetailsBox   : {
        flexDirection   : 'column',
        backgroundColor : 'white',
        marginLeft      : 10,
        marginBottom    : 10,
        borderRadius    : 10,
        borderWidth     : 1,
    },
    dayText             : {
        textAlign       : "center",
        fontWeight      : "bold",
        fontSize        : 15
    },
    weatherText         : {

        textAlign       : "center",
        fontSize        : 20,
        fontWeight      : "bold"
    }
});

const mapStateToProps = state => {
    return {
        currentWeather  : state.focusedCity,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetData       : ()      => dispatch ({type : 'CLEAR_CITY_DATA'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForDays);

/*
*/
