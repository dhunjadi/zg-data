import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useUserLocation = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [errorMessage, setErrorMesage] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const getuserLocation = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync();

    if (!granted) {
      setErrorMesage("Location permmission not granted");
      Alert.alert("Enable location services to see your location on the map!");
      return;
    }

    setIsPermissionGranted(true);
    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      setLatitude(latitude.toString());
      setLongitude(longitude.toString());
    }
  };

  useEffect(() => {
    getuserLocation();
  }, []);

  return { isPermissionGranted, latitude, longitude, errorMessage };
};
