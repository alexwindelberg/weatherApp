import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image } from 'react-native';

class WeatherDetails extends Component {

    render () {
        return (
            <View style={styles.messageBox}>
                <View> 
                    <Text  style={styles.messageBoxTitleText} >A simple mesage</Text>
                    <Image style={{width: 50, height: 50}} source={{uri: 'http://openweathermap.org/img/w/10d.png'}} />
                </View>
                <View>
                    <Text style={styles.messageBoxBodyText}>This is just a dummy sample it will help us to see the alignment in action.</Text>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    messageBox:{
        backgroundColor : '#ef553a',
        width           : 'auto',
        paddingTop      : 10,
        paddingBottom   : 5,
        paddingLeft     : 20,
        paddingRight    : 20,
        height          : 150,
    },
    messageBoxTitleText:{
        fontWeight      : 'bold',
        color           : '#fff',
        textAlign       : 'center',
        fontSize        : 20,
        marginBottom    : 10
    },
    messageBoxBodyText:{
        color           : '#fff',
        fontSize        : 16
    }
});

const mapStateToProps = state => {
    return {
        current_local   : state.currentLocation,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCoordinates  : (loc) => dispatch({type: 'GET_CURRENT_LOCATION', c_location : loc}),
        //get weather details for cl
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);