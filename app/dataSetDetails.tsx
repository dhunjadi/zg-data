import Spinner from "@/components/Spinner";
import { CATEGORIES } from "@/constants/categories";
import { useErrorAlert } from "@/hooks/useErrorAlert";
import { useFetchCKAN } from "@/hooks/useFetchCKAN";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Text, useColorScheme, View } from "react-native";

const flatDataSets = CATEGORIES.flatMap((category) =>
  category.dataSets.map((dataSet) => dataSet),
);

const DataSetDetailsScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { datasetId, fetchUrl, label } = useLocalSearchParams<{
    datasetId?: string;
    fetchUrl?: string;
    label?: string;
  }>();

  const { data: ckanData, isFetching, isError } = useFetchCKAN(fetchUrl || "");
  useErrorAlert(isError);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: label,
    });
  }, [label, navigation]);

  const selectedDataSet = useMemo(
    () => flatDataSets.find((set) => set.id === datasetId),
    [datasetId],
  );

  const displayItems = ckanData?.result.records.map((record) =>
    selectedDataSet?.getCKANDisplayData?.(record),
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
    <View
      className={`flex-1 p-4 ${isDarkTheme ? "bg-screenBgDark" : "bg-neutral-100"}`}
    >
      <FlatList
        data={displayItems}
        contentContainerClassName={`${isDarkTheme ? "bg-screenBgDark" : "bg-neutral-100"} p-4`}
        ListEmptyComponent={
          <View className="flex items-center justify-center">
            <Text
              className={`${isDarkTheme ? "text-textDarkPimary" : "text-primaryDark"} mt-4`}
            >
              No data!
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View
            key={item?.title}
            className="mb-4 bg-elementBgDark p-4 rounded-md"
          >
            <Text
              className={`mb-4 text-xl ${isDarkTheme ? "text-highlight" : "text-primaryDark"} font-bold`}
            >
              {item?.title}
            </Text>
            {item?.details.map((detail) => (
              <Text
                key={detail.label}
                className={`mb-4 text-xl ${isDarkTheme ? "text-textDarkPimary" : "text-primaryLight"}`}
              >
                {t(detail.label)}: {detail.value}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default DataSetDetailsScreen;
