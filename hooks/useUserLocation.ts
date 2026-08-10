import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useUserLocation = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const getUserLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) {
        setIsPermissionGranted(false);
        setErrorMessage("Location permission not granted");
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync();

      setIsPermissionGranted(true);
      setErrorMessage("");

      setLatitude(coords.latitude.toString());
      setLongitude(coords.longitude.toString());
    } catch {
      Alert.alert("Location services are disabled");
      setIsPermissionGranted(false);
      setErrorMessage("Location services are disabled");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return { isPermissionGranted, latitude, longitude, errorMessage };
};
