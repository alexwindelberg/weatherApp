import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { MapView } from 'expo'
import { connect } from 'react-redux'


class GoogleMap extends Component {

    render() {
        const index = this.props.cIndex - 1
        const lat = this.props.cityList[index].cityWeather.latitude;
        const lon = this.props.cityList[index].cityWeather.longitude;
        return ( 
                <ScrollView style={styles.mapContainer}>
                            <MapView
                                style={ styles.mapContainer }
                                initialRegion={{
                                latitude: lat,
                                longitude: lon,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                                }}
                            />
                </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    mapContainer        : {
        backgroundColor : 'black',
        width           : 'auto',
        height          : 350,
    }
})

const mapStateToProps = state => {
    return {
        cityList         : state.weatherList,
        cIndex           : state.iteratorFocus,
    }
}

export default connect(mapStateToProps)(GoogleMap);