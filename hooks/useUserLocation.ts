import { MAP_MODALS_INITIAL_STATE } from "@/constants/mapConstants";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

// Outside of the hook to avoid asking to turn on location services
// every time user opens the map
let hasAskedToEnableLocationServices = false;

export const useUserLocation = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [renderModal, setRenderModal] = useState(MAP_MODALS_INITIAL_STATE);

  const getUserLocation = async () => {
    try {
      const locationServicesEnabled = await Location.hasServicesEnabledAsync();

      if (!locationServicesEnabled) {
        setIsPermissionGranted(false);

        if (!hasAskedToEnableLocationServices) {
          hasAskedToEnableLocationServices = true;
          setRenderModal((prev) => ({ ...prev, locationServices: true }));
        }
        return;
      }

      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) {
        setIsPermissionGranted(false);
        return;
      }

      setIsPermissionGranted(true);
    } catch {
      setIsPermissionGranted(false);

      if (!hasAskedToEnableLocationServices) {
        hasAskedToEnableLocationServices = true;
      }
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return {
    isPermissionGranted,
    setRenderModal,
    renderModal,
    getUserLocation,
  };
};
