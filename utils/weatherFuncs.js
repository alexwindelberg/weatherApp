import { weather_API, google_API } from './apiKeys'

/* 
  Gets the coordinates from the user if permission's are given and returns the latitude and longitude
*/
export const getLocationAsync = async () => {
  const { Location, Permissions } = Expo;
  // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
  const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    return Location.getCurrentPositionAsync({enableHighAccuracy: true});
  } else {
    return 'Location permission not granted';
  }
}

/*
  Uses GoogleGeocode to get the city of the latitude and longitude for the current location
*/
export const getCityAsync = async (lat, lon) => {
  
  try {
    const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${google_API}`)
    const response = await data.json();
    return response;
  } catch ( err ) {
    console.log(err);
  }

}

/*
  Get the weather for a given location in coordinates longitude, latitude
  then returns the response
*/
export const getWeatherAsync = async (lat, lon) => {

  try {
    const data = await fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${weather_API}&units=imperial`)
    const response = await data.json();
    return response;
  } catch ( err ) {
    console.log(err);
  }
}

/*
  Gets the weather for the given day and the rest of the week
*/
export const getAdditionalWeatherAsync = async (lat, lon) => {
  const days = 40;
  try {
    const data = await fetch (`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${days}&APPID=${weather_API}&units=imperial`)
    const response = await data.json();
    return response;
  } catch ( err ) {
    console.log(err);
  }
}
