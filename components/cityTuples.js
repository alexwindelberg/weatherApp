import React, { Component } from 'react'
import { View, Text, StyleSheet, Slider } from 'react-native'
import { connect } from 'react-redux'


class CityTuple extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <View style={styles.listBox}>
                    {
                        this.props.cityList.map( city => {
                            return (
                                <View style={styles.TextBox} key={city.uniqueId}>
                                    <Text onPress={() => this.props.focusDetailsCallBack(city.uniqueId)} style={styles.TextStyling}>
                                        {city.cityWeather.cityInfo}
                                    </Text>
                                    <Text style={styles.TextDegree}>{Math.ceil(city.cityWeather.temp)}°</Text>
                                </View>
                            )
                        }) 
                    }
            </View>
        )
    }
}

var styles = StyleSheet.create({
    listBox             : {
        width           : 'auto',
        paddingTop      : 10,
        paddingBottom   : 5,
        paddingLeft     : 20,
        paddingRight    : 20,
        flexDirection   : 'column',
    },

    TextBox             : {
        width           : 'auto',
        paddingTop      : 5,
        paddingBottom   : 5,
        paddingLeft     : 5,
        paddingRight    : 5,
        flexDirection   : 'row',
        justifyContent  : 'space-between',
    },
    TextStyling         : {
        textAlign       : 'left',
        fontSize        : 20,
    },
    TextDegree          : {
        textAlign       : 'center',
        fontSize        : 20,
    }
});

const mapStateToProps = state => {
    return {
        cityList        : state.weatherList,
    }
}

export default connect(mapStateToProps)(CityTuple)