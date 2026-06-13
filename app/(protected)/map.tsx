import { getDataSetConfig } from "@/constants/dataSets";
import { useFetchGeoJson } from "@/hooks/useFetchGeoJson";
import { Feature, MultiPolygonGeometry } from "@/types";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, {
  LatLng,
  Marker,
  Polygon,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";

const INITIAL_REGION = {
  latitude: 45.815399,
  longitude: 15.966568,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const MapScreen = () => {
  const { datasetId, fetchUrl } = useLocalSearchParams<{
    datasetId?: string;
    fetchUrl?: string;
  }>();

  const selectedDatasetId = Array.isArray(datasetId) ? datasetId[0] : datasetId;
  const geoJsonUrl = Array.isArray(fetchUrl) ? fetchUrl[0] : fetchUrl;
  const dataSet = getDataSetConfig(selectedDatasetId);

  const ref = useRef<MapView | null>(null);

  const [region, setRegion] = useState<Region>(INITIAL_REGION);
  const [selectedFeature, setSelectedFeature] = useState<Feature<
    Record<string, unknown>
  > | null>(null);

  const { data: geoData } = useFetchGeoJson<Record<string, unknown>>(
    dataSet?.fetchUrl ?? geoJsonUrl ?? "",
  );

  const visibleFeatures = useMemo(() => {
    if (!geoData) return [];

    return geoData.features.filter((feature) => {
      if (feature.geometry.type === "Point") {
        const [lng, lat] = feature.geometry.coordinates;

        const minLat = region.latitude - region.latitudeDelta / 2;
        const maxLat = region.latitude + region.latitudeDelta / 2;
        const minLng = region.longitude - region.longitudeDelta / 2;
        const maxLng = region.longitude + region.longitudeDelta / 2;

        return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
      }

      // No viewport filtering for feature.geometry.type === "Multipolygon"
      return true;
    });
  }, [geoData, region]);

  const selectedFeatureData =
    selectedFeature && dataSet
      ? dataSet.getDisplayData(selectedFeature)
      : undefined;

  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  const multiPolygonToCoordinates = (
    geometry: MultiPolygonGeometry,
  ): LatLng[][] => {
    return geometry.coordinates.map((polygon) => {
      const outerRing = polygon[0];

      return outerRing.map(([lng, lat]) => ({
        latitude: lat,
        longitude: lng,
      }));
    });
  };

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
          {visibleFeatures.map((feature) => {
            const key = feature.properties.OBJECTID ?? feature.id;

            if (feature.geometry.type === "Point") {
              const [lng, lat] = feature.geometry.coordinates;

              return (
                <Marker
                  key={key}
                  coordinate={{
                    latitude: lat,
                    longitude: lng,
                  }}
                  onPress={() => setSelectedFeature(feature)}
                />
              );
            }

            if (feature.geometry.type === "MultiPolygon") {
              const polygons = multiPolygonToCoordinates(feature.geometry);

              return polygons.map((coordinates, index) => (
                <Polygon
                  key={`${key}-${index}`}
                  coordinates={coordinates}
                  fillColor="rgba(0, 112, 187, 0.5)"
                  strokeColor="#005793"
                  strokeWidth={2}
                />
              ));
            }

            return null;
          })}
        </MapView>
        <BottomSheet snapPoints={snapPoints}>
          <BottomSheetView className="p-4">
            <Text className="text-xl font-bold text-primaryDark">
              {selectedFeatureData?.title || "Odaberite lokaciju"}
            </Text>

            {selectedFeatureData?.details.map((detail) =>
              detail.value ? (
                <View key={detail.label} className="mt-3">
                  <Text className="text-xs font-bold uppercase text-black">
                    {detail.label}
                  </Text>
                  <Text className="text-base text-neutral-900">
                    {detail.value}
                  </Text>
                </View>
              ) : null,
            )}
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
