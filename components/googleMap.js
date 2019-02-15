import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { MapView } from 'expo'
import { connect } from 'react-redux'


class GoogleMap extends Component {

    componentDidMount () {
        console.log("this is cIndex " + this.props.cIndex)
    }

    render() {
        return (
                <ScrollView style={styles.mapContainer}>
                        <MapView
                                style={ styles.mapContainer }
                                initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
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
        focusedCity      : state.focusedCurrent,
        cityList         : state.weatherList,
        cIndex           : state.focusIndex
    }
}

export default connect(mapStateToProps)(GoogleMap);