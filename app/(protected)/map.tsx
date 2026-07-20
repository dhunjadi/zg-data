import DetailsBottomSheet from "@/components/DetailsBottomSheet";
import Map from "@/components/Map";
import Spinner from "@/components/Spinner";
import { CATEGORIES } from "@/constants/categories";
import { useFetchGeoJson } from "@/hooks/useFetchGeoJson";
import { Feature } from "@/types";
import BottomSheet from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Region } from "react-native-maps";

const INITIAL_REGION: Region = {
  latitude: 45.815399,
  longitude: 15.966568,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const flatDataSets = CATEGORIES.flatMap((category) =>
  category.dataSets.map((dataSet) => dataSet),
);

const MapScreen = () => {
  const { datasetId, fetchUrl } = useLocalSearchParams<{
    datasetId?: string;
    fetchUrl?: string;
  }>();

  const { data: geoData, isFetching } = useFetchGeoJson(fetchUrl || "");

  const [region, setRegion] = useState<Region>(INITIAL_REGION);
  const [selectedFeature, setSelectedFeature] = useState<Feature<
    Record<string, unknown>
  > | null>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const selectedDataSet = flatDataSets.find((set) => set.id === datasetId);

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

  const handleOnPress = useCallback(
    (feature: Feature<Record<string, unknown>>) => {
      setSelectedFeature(feature);
      bottomSheetRef.current?.snapToIndex(0);
    },
    [],
  );

  if (isFetching) {
    return <Spinner size="large" />;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">
        <Map
          visibleFeatures={visibleFeatures}
          selectedFeature={selectedFeature}
          onFeatureSelect={handleOnPress}
          onRegionChange={setRegion}
        />
        <DetailsBottomSheet
          ref={bottomSheetRef}
          selectedFeatureData={selectedFeatureData}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default MapScreen;
