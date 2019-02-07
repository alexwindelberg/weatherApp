import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getWeatherAsync } from '../utils/weatherFuncs'
import { google_API } from '../utils/apiKeys';

class AutoComplete extends Component {

  constructor(props) {
    super(props)
  }

  async searchCompleted(description, coordinates) {

    await getWeatherAsync(coordinates.lat, coordinates.lng).then((data) => {
      const icon               = data.weather[0].icon   
      const { temp }           = data.main
      const weatherData        = {
          icon,
          temp,
      }
      return weatherData
    }).finally(results => {

      let cityInfo = description.replace(/[^a-zA-Z ]/g, "").split(" ")
      
      const newCity = {
          ...results,
          latitude  : coordinates.lat, 
          longitude : coordinates.lng,
          city      : cityInfo[0],
          state     : cityInfo[1],
          country   : cityInfo[2],
      }
      this.props.addCity(newCity)
      
      this.props.searchCallBack()
    })
  }



  render() {
        return (
            <GooglePlacesAutocomplete
              placeholder='Search'
              minLength={2} // minimum length of text to search
              autoFocus={true}
              fetchDetails={true}
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                this.searchCompleted(data.description, details.geometry.location)
                //console.log(details.geometry.location);
              }}
              getDefaultValue={() => {
                return ''; // text input default value
              }}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: google_API,
                language: 'en', // language of the results
                types: '(cities)', // default: 'geocode'
              }}
              styles={{
                  textInputContainer: {
                    width: '100%'
                  },
                  textInput: {
                      marginLeft: 0,
                      marginTop: 10,
                      marginRight: 0,
                      height: 30,
                      color: 'black',
                      fontSize: 16
                  },
                  description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  }
              }}
              
              currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Current Location"
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addCity                   : (city)        => dispatch({type : 'ADD_CITY', addCity: city}),
      addCurrentWeatherDetails  : (cwDetails)   => dispatch({type : 'ADD_LOCAL_WEATHER_LIST'}),
    }
}


export default connect(null, mapDispatchToProps)(AutoComplete);