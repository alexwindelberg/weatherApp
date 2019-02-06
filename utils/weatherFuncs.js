import { weather_API, google_API } from './apiKeys'

export const getWeatherAsync = async (lat, lon) => {

  try {
    const data = await fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${weather_API}&units=imperial`)
    const response = await data.json();
    return response;
  } catch ( err ) {
    console.log(err);
  }
}

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

export const getAdditionalWeatherAsync = async (lat, lon) => {
  const days = 5;
  try {
    const data = await fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${weather_API}&units=metric&cnt=${days}`)
    const response = await data.json();
    return response;
  } catch ( err ) {
    console.log(err);
  }
}
export const getCityAsync = async (lat, lon) => {
  
  try {
    const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${google_API}`)
    const response = await data.json();
    return response;
  } catch ( err ) {
    console.log(err);
  }

}