import * as Location from "expo-location";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  const getUserLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) {
        setIsPermissionGranted(false);
        return;
      }

      let locationServicesEnabled = await Location.hasServicesEnabledAsync();

      while (!locationServicesEnabled) {
        try {
          await Location.enableNetworkProviderAsync();
        } catch {
          // eslint-disable-next-line no-console
          console.log("Location services not enabled");
        }
      }

      setIsPermissionGranted(true);
    } catch {
      setIsPermissionGranted(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return {
    isPermissionGranted,
    getUserLocation,
  };
};
