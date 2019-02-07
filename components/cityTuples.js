import React, { Component } from 'react'
import { View, Text, StyleSheet, Slider } from 'react-native'
import { connect } from 'react-redux'


class CityTuple extends Component {


    // When you click a city take it the details and then show them all the data,
    // at the top add a button that removes the city from the list and then takens them back the main
    // view
    render () {
        return (
            <View style={styles.listBox}>
                    {
                        this.props.cityList.map( city => {
                            return (
                                <View style={styles.TextBox} key={city.uniqueId}>
                                    <Text style={styles.TextStyling}>
                                        {city.cityWeather.city + " " + city.cityWeather.state + " " + city.cityWeather.country + "\t" }
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
    TextStyling        : {
        textAlign      : 'left',
        fontSize       : 20,
    },
    TextDegree         : {
        textAlign      : 'center',
        fontSize       : 20,
    }
});

const mapStateToProps = state => {
    return {
        cityList      : state.weatherList,
    }
}

/*const mapDispatchToProps = dispatch => {
    return {
        //delete a city
    }
}*/

export default connect(mapStateToProps)(CityTuple)