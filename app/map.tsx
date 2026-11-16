import DetailsBottomSheet from "@/components/DetailsBottomSheet";
import Map from "@/components/Map";
import Spinner from "@/components/Spinner";
import { CATEGORIES } from "@/constants/categories";
import { useErrorAlert } from "@/hooks/useErrorAlert";
import { useFetchGeoJson } from "@/hooks/useFetchGeoJson";
import { Feature } from "@/types";
import BottomSheet from "@gorhom/bottom-sheet";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useNavigation } from "expo-router";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const flatDataSets = CATEGORIES.flatMap((category) =>
  category.dataSets.map((dataSet) => dataSet),
);

const MapScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const { datasetId, fetchUrl, label } = useLocalSearchParams<{
    datasetId?: string;
    fetchUrl?: string;
    label?: string;
  }>();

  const {
    data: geoData,
    isFetching,
    isError,
  } = useFetchGeoJson(fetchUrl || "");

  useErrorAlert(isError);

  const [selectedFeature, setSelectedFeature] = useState<Feature<
    Record<string, unknown>
  > | null>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: label,
    });
  }, [label, navigation]);

  useEffect(() => {
    return () => {
      queryClient.cancelQueries({
        queryKey: ["geo-json", fetchUrl || ""],
      });
    };
  }, [queryClient, fetchUrl]);

  const selectedDataSet = useMemo(
    () => flatDataSets.find((set) => set.id === datasetId),
    [datasetId],
  );
  const visibleFeatures = useMemo(() => {
    return geoData?.features ?? [];
  }, [geoData]);

  const handleOnPress = useCallback(
    (feature: Feature<Record<string, unknown>>) => {
      setSelectedFeature(feature);
      bottomSheetRef.current?.snapToIndex(0);
    },
    [],
  );

  if (isFetching) {
    return (
      <View
        className={`flex-1 ${isDarkTheme ? "bg-screenBgDark" : "bg-neutral-100"}`}
      >
        <Spinner size="large" />
      </View>
    );
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
