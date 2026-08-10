import DetailsBottomSheet from "@/components/DetailsBottomSheet";
import Map from "@/components/Map";
import Spinner from "@/components/Spinner";
import { CATEGORIES } from "@/constants/categories";
import { useFetchGeoJson } from "@/hooks/useFetchGeoJson";
import { Feature } from "@/types";
import BottomSheet from "@gorhom/bottom-sheet";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Alert, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const flatDataSets = CATEGORIES.flatMap((category) =>
  category.dataSets.map((dataSet) => dataSet),
);

const MapScreen = () => {
  const router = useRouter();
  const { datasetId, fetchUrl } = useLocalSearchParams<{
    datasetId?: string;
    fetchUrl?: string;
  }>();

  const {
    data: geoData,
    isFetching,
    isError,
  } = useFetchGeoJson(fetchUrl || "");

  const [selectedFeature, setSelectedFeature] = useState<Feature<
    Record<string, unknown>
  > | null>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (!isError) return;

    Alert.alert("Something went wrong", "Try again later", [
      {
        text: "Go back",
        onPress: () => router.back(),
      },
    ]);
  });

  const selectedDataSet = useMemo(
    () => flatDataSets.find((set) => set.id === datasetId),
    [datasetId],
  );
  const visibleFeatures = useMemo(() => {
    if (!geoData) return [];

    return geoData.features;
  }, [geoData]);

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
        />
        <DetailsBottomSheet
          selectedDataSet={selectedDataSet}
          selectedFeature={selectedFeature}
          ref={bottomSheetRef}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default MapScreen;
