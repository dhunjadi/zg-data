import Spinner from "@/components/Spinner";
import { CATEGORIES } from "@/constants/categories";
import { useFetchCKAN } from "@/hooks/useFetchCKAN";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useMemo } from "react";
import { Text, useColorScheme, View } from "react-native";

const flatDataSets = CATEGORIES.flatMap((category) =>
  category.dataSets.map((dataSet) => dataSet),
);

const DataSetDetailsScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";
  const navigation = useNavigation();

  const { datasetId, fetchUrl, label } = useLocalSearchParams<{
    datasetId?: string;
    fetchUrl?: string;
    label?: string;
  }>();

  const { data: ckanData, isFetching } = useFetchCKAN(fetchUrl || "");

  const selectedDataSet = useMemo(
    () => flatDataSets.find((set) => set.id === datasetId),
    [datasetId],
  );

  // eslint-disable-next-line no-console
  console.log(ckanData?.result.records);

  useEffect(() => {
    navigation.setOptions({
      title: label,
    });
  }, [label, navigation]);

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
    <View
      className={`flex-1 p-4 ${isDarkTheme ? "bg-screenBgDark" : "bg-neutral-100"}`}
    >
      <Text
        className={`mb-4 text-xl ${isDarkTheme ? "text-highlight" : "text-neutral-900"}`}
      >
        {selectedDataSet?.description}
      </Text>
    </View>
  );
};

export default DataSetDetailsScreen;
