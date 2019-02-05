import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import WeatherDetails from '../components/weatherDetails'
import { getLocationAsync, getWeatherAsync } from '../utils/weatherFuncs'
import { _setLoading, _setCurrentLocation } from '../actions'


// I'm thinking im going to take from App and make this component a class and a container folder for it,
// once this is done we need to figure out which peices of data need to move and split them to be handled
// to redux, the reason I'm considering promoting this component is because the high component in our case
// App.js needs to be wrapped with <Provider > and I'm not sure if aync functions to get my data will
// be able to get attained and trigger Provider properly

class WeatherContainer extends Component {

    async componentDidMount() {
    
        await getLocationAsync().then(d => {
            const { latitude, longitude } = d.coords;
            const coordinate = {
                latitude, 
                longitude
            }
            this.props.setCoordinates(coordinate);
        });
    
        
        await getWeatherAsync(this.props.current_local.latitude, this.props.current_local.longitude).finally( (data) => {
            console.log(data);
            this.props.setIsLoading();
        });
    }

    componentWillMount() {
        //console.log(this.props.lat);
    }

    render () {
        return (    
            <View style={styles.content}>
                { this.props.loading ? 
                    (
                        <Text>Loading...</Text>
                    ) : 
                    (
                        <WeatherDetails/>
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        backgroundColor :  '#ebeef0',
        flex            :  1,
        alignItems      :  'center'    
    }
});


const mapStateToProps = state => {
    return {
        loading           : state.isLoading,
        current_local      : state.currentLocation,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setIsLoading   : () => dispatch({type: 'SET_LOADING'}),
        setCoordinates : (loc) => dispatch({type: 'SET_CURRENT_LOCATION', c_location : loc}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer); 