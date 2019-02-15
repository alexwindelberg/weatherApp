import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherAsync, getAdditionalWeatherAsync } from '../utils/weatherFuncs'
import CityWeather from '../components/CityWeather'
import WeatherForDays from '../components/WeatherForDays'
import { View, Text } from 'react-native'
import GoogleMap from '../components/googleMap';


class CityWeatherContainer extends Component {

    async componentDidMount () {
        
        this.props.setLoading()
        const { navigation } = this.props
        const cityIndex = navigation.getParam('cityListIndex', 'NO-ID') 
        const focusedCity = this.props.cityList[cityIndex - 1]
        const highNoon = "12:00:00"

        await getWeatherAsync(focusedCity.cityWeather.latitude, focusedCity.cityWeather.longitude).then((data) => {
            const icon               = data.weather[0].icon   
            const { temp }           = data.main
            const cityInfo           = focusedCity.cityWeather.cityInfo
            const newData            = {
                icon,
                temp,
                cityInfo,
            }
            this.props.storeFocusC(newData);
        });

        await getAdditionalWeatherAsync(focusedCity.cityWeather.latitude, focusedCity.cityWeather.longitude).then(data => {

            data["list"].map(listItem => {

                const time = listItem["dt_txt"].split(" ")[1]
                const date = new Date(listItem["dt_txt"].split(" ")[0])
                const objDate = date.getDay()
                if(time.includes(highNoon)) {
                    const { icon } = listItem.weather[0]
                    const { temp } = listItem.main

                    const newData = {
                        icon,
                        temp,
                        objDate
                    }
                    this.props.storeCityInFocus(newData)
                }
            })

            this.props.setLoading()
        })
    }

    render () {
        return (
            <View>
                 <CityWeather />
                 {
                    this.props.loading ? <Text>loading....</Text> : <WeatherForDays/>
                 }
                 {
                    this.props.loading ? <Text>loading....</Text> : <GoogleMap />
                 }
            </View>

        )
    }

}

const mapStateToProps = state => {
    return {
        cityList         : state.weatherList,
        f_cityList       : state.focusedCity,
        loading          : state.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLoading       : ()               => dispatch ({type : 'SET_LOADING'}),
        storeCityInFocus : (cityI)          => dispatch ({type : 'FOCUSED_CITY', cityinfo : cityI }),
        storeFocusC      : (focusedCurrent) => dispatch ({type : 'FOCUSED_CURRENT', cFocused : focusedCurrent}),
        resetData        : ()               => dispatch ({type : 'CLEAR_CITY_DATA'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityWeatherContainer)
