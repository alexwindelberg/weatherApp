import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdditionalWeatherAsync } from '../utils/weatherFuncs'

import { View, Text, StyleSheet, Button } from 'react-native'


class CityWeatherContainer extends Component {


    async componentDidMount () {

        const { navigation } = this.props;
        const cityIndex = navigation.getParam('cityListIndex', 'NO-ID');
        const focusedCity = this.props.cityList[cityIndex]

        await getAdditionalWeatherAsync(focusedCity.cityWeather.latitude, focusedCity.cityWeather.longitude).then(data => {
            console.log(data)
        })

    }

    render () {
        return (
            <Text>Hello from City, this is the city </Text>
        )
    }


}

const mapStateToProps = state => {
    return {
        cityList : state.weatherList,
    };
};

export default connect(mapStateToProps)(CityWeatherContainer)