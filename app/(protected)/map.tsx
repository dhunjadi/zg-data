import { CATEGORIES } from "@/constants/categories";
import { useFetchGeoJson } from "@/hooks/useFetchGeoJson";
import {
  Feature,
  MultiLineStringGeometry,
  MultiPolygonGeometry,
  PolygonGeometry,
} from "@/types";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, {
  LatLng,
  Marker,
  Polygon,
  Polyline,
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

  const flatDataSets = CATEGORIES.flatMap((category) =>
    category.dataSets.map((dataSet) => dataSet),
  );

  const selectedDataSet = flatDataSets.find((set) => set.id === datasetId);

  const mapViewRef = useRef<MapView | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [region, setRegion] = useState<Region>(INITIAL_REGION);
  const [selectedFeature, setSelectedFeature] = useState<Feature<
    Record<string, unknown>
  > | null>(null);

  const { data: geoData, isFetching } = useFetchGeoJson<
    Record<string, unknown>
  >(fetchUrl || "");

  const visibleFeatures = useMemo(() => {
    if (!geoData) return [];

    const minLat = region.latitude - region.latitudeDelta / 2;
    const maxLat = region.latitude + region.latitudeDelta / 2;
    const minLng = region.longitude - region.longitudeDelta / 2;
    const maxLng = region.longitude + region.longitudeDelta / 2;

    return geoData.features.filter((feature) => {
      if (!feature.geometry) return false;

      if (feature.geometry.type === "Point") {
        const [lng, lat] = feature.geometry.coordinates;
        return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
      }

      if (feature.geometry.type === "MultiLineString") {
        return feature.geometry.coordinates.some((line) =>
          line.some(
            ([lng, lat]) =>
              lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng,
          ),
        );
      }

      return true;
    });
  }, [geoData, region]);

  const selectedFeatureData =
    selectedDataSet && selectedFeature
      ? selectedDataSet.getDisplayData(selectedFeature)
      : undefined;

  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  const polygonToCoordinates = (geometry: PolygonGeometry): LatLng[] => {
    return geometry.coordinates[0].map(([lng, lat]) => ({
      latitude: lat,
      longitude: lng,
    }));
  };

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

  const multiLineToCoordinates = (
    geometry: MultiLineStringGeometry,
  ): LatLng[][] => {
    return geometry.coordinates.map((line) =>
      line.map(([lng, lat]) => ({
        latitude: lat,
        longitude: lng,
      })),
    );
  };

  if (isFetching) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">
        <MapView
          ref={mapViewRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          onMapReady={async () => {
            const boundaries = await mapViewRef.current?.getMapBoundaries();
            if (!boundaries) return;

            const { northEast, southWest } = boundaries;

            setRegion({
              latitude: (northEast.latitude + southWest.latitude) / 2,
              longitude: (northEast.longitude + southWest.longitude) / 2,
              latitudeDelta: northEast.latitude - southWest.latitude,
              longitudeDelta: northEast.longitude - southWest.longitude,
            });
          }}
          onRegionChangeComplete={(newRegion) => {
            /* console.log("onRegionChangeComplete"); */
            setRegion(newRegion);
          }}
          className="w-full h-full"
        >
          {visibleFeatures.map((feature) => {
            // OBJECTID_1 --> Check Roman catholic parishes geojson
            // FID --> Check Telecommunication Distribution Cabinets
            const key =
              (feature.properties.OBJECTID ||
                feature.properties.OBJECTID_1 ||
                feature.properties.FID) ??
              feature.id;

            if (feature.geometry.type === "Point") {
              const [lng, lat] = feature.geometry.coordinates;

              return (
                <Marker
                  key={key}
                  coordinate={{
                    latitude: lat,
                    longitude: lng,
                  }}
                  onPress={() => {
                    setSelectedFeature(feature);
                    bottomSheetRef.current?.snapToIndex(0);
                  }}
                />
              );
            }

            if (feature.geometry.type === "Polygon") {
              const coordinates = polygonToCoordinates(feature.geometry);
              const isSelected = selectedFeature === feature;

              return (
                <Polygon
                  key={`${key}`}
                  coordinates={coordinates}
                  fillColor={
                    isSelected
                      ? "rgba(0, 112, 187, 0.5)"
                      : "rgba(0, 112, 187, 0.02)"
                  }
                  strokeColor="#005793"
                  strokeWidth={2}
                  tappable
                  onPress={() => {
                    setSelectedFeature(feature);
                    bottomSheetRef.current?.snapToIndex(0);
                  }}
                />
              );
            }

            if (feature.geometry.type === "MultiPolygon") {
              const polygons = multiPolygonToCoordinates(feature.geometry);
              const isSelected = selectedFeature === feature;
              const isInnerZone =
                feature.properties.Naziv === "I. ZONA" ||
                feature.properties.Naziv === "II. ZONA";

              return polygons.map((coordinates, index) => (
                <Polygon
                  key={`${key}-${index}`}
                  coordinates={coordinates}
                  fillColor={
                    isSelected
                      ? "rgba(0, 112, 187, 0.5)"
                      : "rgba(0, 112, 187, 0.02)"
                  }
                  strokeColor="#005793"
                  strokeWidth={2}
                  tappable
                  zIndex={isInnerZone ? 20 : 10}
                  onPress={() => {
                    setSelectedFeature(feature);
                    bottomSheetRef.current?.snapToIndex(0);
                  }}
                />
              ));
            }

            if (feature.geometry.type === "MultiLineString") {
              const polygons = multiLineToCoordinates(feature.geometry);

              return polygons.map((coordinates, index) => (
                <Polyline
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
        <BottomSheet
          index={-1}
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          enablePanDownToClose
        >
          <BottomSheetView className="p-4">
            <Text className="text-xl font-bold text-primaryDark">
              {selectedFeatureData?.title || ""}
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
