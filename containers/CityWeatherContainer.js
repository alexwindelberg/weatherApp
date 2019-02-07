import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, StyleSheet, Button } from 'react-native'


class CityWeatherContainer extends Component {

    render () {
        return (
            <Text> </Text>
        )
    }


}

const mapStateToProps = state => {
    return {
        cityList : state.weatherList,
    };
};

export default connect(mapStateToProps)(CityWeatherContainer)