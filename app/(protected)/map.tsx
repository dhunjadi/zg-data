import { useFetchGeoJson } from "@/hooks/useFetchGeoJson";
import { Feature } from "@/types";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";

const INITIAL_REGION = {
  latitude: 45.815399,
  longitude: 15.966568,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const MapScreen = () => {
  const { fetchUrl } = useLocalSearchParams();
  const geoJsonUrl = Array.isArray(fetchUrl) ? fetchUrl[0] : fetchUrl;
  const ref = useRef<MapView | null>(null);
  const [region, setRegion] = useState<Region>(INITIAL_REGION);
  const { data: geoData } = useFetchGeoJson(geoJsonUrl ?? "");

  const visibleFeatures = useMemo(() => {
    if (!geoData) return [];

    const minLat = region.latitude - region.latitudeDelta / 2;
    const maxLat = region.latitude + region.latitudeDelta / 2;
    const minLng = region.longitude - region.longitudeDelta / 2;
    const maxLng = region.longitude + region.longitudeDelta / 2;

    return geoData.features.filter((feature: Feature) => {
      const [lng, lat] = feature.geometry.coordinates;
      return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
    });
  }, [geoData, region]);

  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  return (
    <GestureHandlerRootView className="flex-1">
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
                onPress={() => console.log("test")}
              />
            );
          })}
        </MapView>
        <BottomSheet snapPoints={snapPoints}>
          <BottomSheetView className="p-4">
            <Text>Bottom sheet</Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  sheetContent: {
    padding: 16,
  },
});
