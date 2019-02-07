import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import WeatherContainer from '../containers/WeatherContainer'
import SearchCity from '../containers/SearchCity'
import CityFocusContainer from '../containers/CityFocusContainer'

const MainNavigator = createStackNavigator(
    {
        Main   : WeatherContainer,
        Search : SearchCity,
        Focus  : CityFocusContainer,
    }, {
        initialRouteName: "Main",
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
    }
);

const MainNavContainer = createAppContainer(MainNavigator);


export default MainNavContainer