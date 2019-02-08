import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'

class WeatherForDays extends Component {

    populateSquares = () => (
        this.props.currentWeather.map(data => {
            return <Image style={{width: 80, height: 80, marginLeft: 100}} key={data.objDate} source={{uri: "http://openweathermap.org/img/w/" + data.icon + ".png" }} />
        })
    )

    render () {
        return (
            <View style={styles.weatherBox}>
                <View>
                    <View> 
                        <Text style={styles.weatherDetailsBox}>  { Math.round(this.props.currentWeather.temp)}° </Text>
                        <Text style={styles.locationDetails}  >  { this.props.currentWeather.cityInfo } </Text>
                    </View>
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
        height          : 150,
        flexDirection   : 'row',
    },
    weatherDetailsBox   : {
        fontWeight      : 'bold',
        color           : '#fff',
        textAlign       : 'left',
        fontSize        : 30,
        marginBottom    : 3,
    },
});

const mapStateToProps = state => {
    return {
        currentWeather  : state.focusedCity,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetData        : ()      => dispatch ({type : 'CLEAR_CITY_DATA'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForDays);