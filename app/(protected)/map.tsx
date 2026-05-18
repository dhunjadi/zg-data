import { useFetchGeoJson } from "@/hooks/useFetchGeoJson";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";

const INITIAL_REGION = {
  latitude: 45.815399,
  longitude: 15.966568,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export type Item = {
  id: number;
  type: string;
  features: Feature[];
};

export type Feature = {
  type: string;
  properties: Properties;
  geometry: {
    type: string;
    coordinates: number[];
  };
};

type Properties = {
  OBJECTID: number;
};

const MapScreen = () => {
  const { fetchUrl } = useLocalSearchParams();
  const geoJsonUrl = Array.isArray(fetchUrl) ? fetchUrl[0] : fetchUrl;
  const ref = useRef<MapView | null>(null);
  const [region, setRegion] = useState<Region>(INITIAL_REGION);
  const { data: parkingData } = useFetchGeoJson(geoJsonUrl ?? "");

  const visibleFeatures = useMemo(() => {
    if (!parkingData) return [];

    const minLat = region.latitude - region.latitudeDelta / 2;
    const maxLat = region.latitude + region.latitudeDelta / 2;
    const minLng = region.longitude - region.longitudeDelta / 2;
    const maxLng = region.longitude + region.longitudeDelta / 2;

    return parkingData.features.filter((feature: Feature) => {
      const [lng, lat] = feature.geometry.coordinates;
      return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
    });
  }, [parkingData, region]);

  return (
    <View className="flex-1">
      <MapView
        ref={ref}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={setRegion}
        className="w-full h-full"
      >
        {visibleFeatures.map((feature: Feature) => {
          const [lng, lat] = feature.geometry.coordinates;
          return (
            <Marker
              key={feature.properties.OBJECTID}
              coordinate={{ latitude: lat, longitude: lng }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
