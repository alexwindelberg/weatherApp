import { weather_API } from './apiKeys'

export const getWeatherAsync = async (lat, lon) => {

  try {
    const data = await fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${weather_API}&units=metric`)
    const response = await data.json();
    //console.log(response);
    return response;
  } catch ( err ) {
    console.log(err);
  }
}