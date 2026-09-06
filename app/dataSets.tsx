import DataSetItem from "@/components/DataSetItem";
import { CATEGORIES } from "@/constants/categories";
import { Search } from "lucide-react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Text, TextInput, useColorScheme, View } from "react-native";

const DataSetsScreen = () => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const [filterText, setFilterText] = useState("");

  const flatDataSets = CATEGORIES.flatMap((category) =>
    category.dataSets.map((dataSet) => dataSet),
  );

  const filteredData = flatDataSets.filter((item) =>
    t(item.label).toLowerCase().includes(filterText.toLowerCase()),
  );

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item) => item.id}
      contentContainerClassName={`flex-1 ${isDarkTheme ? "bg-screenBgDark" : "bg-neutral-100"} p-4`}
      ListEmptyComponent={
        <View className="flex flex-1 items-center justify-center">
          <Text className="mt-4">{t("screens.dataSets.datasetNotFound")}</Text>
        </View>
      }
      renderItem={({ item, index }) => (
        <DataSetItem
          {...item}
          label={t(item.label)}
          description={t(item.description)}
          customClassName={filteredData.length === index + 1 ? "pb-2" : ""}
          icon={(props) => <item.icon {...props} />}
        />
      )}
      ListHeaderComponent={
        <>
          <Text
            className={`text-3xl ${isDarkTheme ? "text-textDarkPimary" : "text-primaryDark"} font-bold mb-2`}
          >
            {t("screens.dataSets.title")}
          </Text>

          <Text
            className={`text-md ${isDarkTheme ? "text-textDarkPimary" : "text-neutral-700"} mb-4`}
          >
            {t("screens.dataSets.description")}
          </Text>

          <View
            className={`flex-row items-center ${isDarkTheme ? "bg-elementBgDark" : "bg-white"} rounded-md px-3`}
          >
            <Search
              size={20}
              color={`${isDarkTheme ? "#8baedd" : "#737373"}`}
            />
            <TextInput
              placeholder={t("screens.dataSets.searchInputPlaceholder")}
              value={filterText}
              onChangeText={(val) => setFilterText(val)}
              autoCorrect={false}
              placeholderTextColor={`${isDarkTheme ? "#8baedd" : "#9ca3af"}`}
              className="flex-1 p-4 text-base text-neutral-700"
            />
          </View>
        </>
      }
    />
  );
};

export default DataSetsScreen;
