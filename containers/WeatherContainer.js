import React, { Component } from 'react'
import { View, StyleSheet, Button, Platform } from 'react-native'
import { connect } from 'react-redux'
import { getLocationAsync, getWeatherAsync, getCityAsync } from '../utils/weatherFuncs'
import WeatherDetails from '../components/WeatherDetails'
import CityTuples from '../components/CityTuples'


class WeatherContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight: (
                <Button
                onPress={() => navigation.navigate('Search')}
                title="Search"
                color={Platform.OS === 'ios' ? "#fff" : "#f4511e" }
                />
            ),
        }
    };

    async componentDidMount() {

        // If the page is reloaded redux remembers we have to find out if we have reloaded and reset 
        // loading
        //this.props.resetData();
        await getLocationAsync().then(d => {
            const { latitude, longitude } = d.coords;
            const coordinates = {
                latitude, 
                longitude
            }
            this.props.setCoordinates(coordinates);
        });

        const results = await getWeatherAsync(this.props.current_local.latitude, this.props.current_local.longitude).then((data) => {
            const icon               = data.weather[0].icon   
            const { temp }           = data.main
            const weatherData        = {
                icon,
                temp,
            }
            return weatherData;
        });

        await getCityAsync (this.props.current_local.latitude, this.props.current_local.longitude).then((data) => {
            const cityInfo    = data.results[1].address_components[3].long_name + " " + data.results[1].address_components[5].short_name + " " + data.results[1].address_components[6].short_name;
            const w_details = {
                ...results,
                cityInfo,
            }
            this.props.addCurrentWeatherDetails(w_details);
        })

    }

    sendUserToFocus = (cityTuple) => (
        this.props.navigation.navigate('Focus', {
            cityListIndex : cityTuple
        })
    )

    initialScreen = () => (
        <View>
            <WeatherDetails />
            <CityTuples focusDetailsCallBack={this.sendUserToFocus} />
        </View>
    )
        
    render () {

        return (    
            <View style={styles.content}>
                {
                    this.initialScreen()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        backgroundColor    : '#ebeef0',
        flex               : 1, 
    }
});


const mapStateToProps = state => {
    return {
        loading            : state.isLoading,
        current_local      : state.currentLocation,
        cityList           : state.weatherList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setIsLoading              : ()              => dispatch({type : 'SET_LOADING'}),
        setCoordinates            : (loc)           => dispatch({type : 'SET_CURRENT_LOCATION', c_location : loc}),
        addCurrentWeatherDetails  : (cwDetails)     => dispatch({type : 'ADD_LOCAL_WEATHER_DETAILS', cl_weather : cwDetails}),
        resetData                 : ()              => dispatch({type : 'RESET'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer); 