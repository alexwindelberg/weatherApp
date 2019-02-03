

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
    This is good but not good enough as this only works with iOS
    need to use https://github.com/Agontuk/react-native-geolocation-service
    to be able to make it work on Android and iOS
  */
export const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const location = JSON.stringify(position);
    this.setState({ location });
  }, error => {Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  });
}
