import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import WeatherContainer from '../containers/WeatherContainer'
import SearchCity from '../containers/SearchCity'

const MainNavigator = createStackNavigator(
    {
        Main   : WeatherContainer,
        Search : SearchCity,

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