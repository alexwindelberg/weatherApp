import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import WeatherDetails from '../components/WeatherDetails'
import NavBar from '../components/navBar'
import { getLocationAsync, getWeatherAsync, getCityAsync } from '../utils/weatherFuncs'


class WeatherContainer extends Component {

    async componentDidMount() {

        await getLocationAsync().then(d => {
            const { latitude, longitude } = d.coords;
            const coordinates = {
                latitude, 
                longitude
            }
            this.props.setCoordinates(coordinates);
        });

        const results = await getWeatherAsync(this.props.current_local.latitude, this.props.current_local.longitude).finally((data) => {
            
            const { id }             = data.sys       
            const icon               = data.weather[0].icon   
            const wId                = data.weather[0].id  
            const { temp }           = data.main
            const weatherData        = {
                id,
                icon,
                wId,
                temp,
            }
            return weatherData;
        });

        await getCityAsync (this.props.current_local.latitude, this.props.current_local.longitude).finally((data) => {
            const city              = data.results[1].address_components[3].long_name
            const state             = data.results[1].address_components[5].short_name
            const country           = data.results[1].address_components[6].short_name
            const w_details = {
                ...results,
                city,
                state,
                country
            }
            console.log(w_details);
            this.props.addCurrentWeatherDetails(w_details);
            this.props.setIsLoading();
        })

    }

    render () {
        return (    
            <View style={styles.content}>
                <NavBar />
                { this.props.loading ? 
                    (
                        <Text>Loading...</Text>
                    ) : 
                    (
                        <WeatherDetails />
                    )
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setIsLoading              : ()              => dispatch({type : 'SET_LOADING'}),
        setCoordinates            : (loc)           => dispatch({type : 'SET_CURRENT_LOCATION', c_location : loc}),
        addCurrentWeatherDetails  : (cwDetails)      => dispatch({type : 'ADD_CURRENT_WEATHER_DETAILS', cl_weather : cwDetails}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer); 