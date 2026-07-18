import DataSetItem from "@/components/DataSetItem";
import { CATEGORIES } from "@/constants/categories";
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Text, TextInput, View } from "react-native";

const DataSetsScreen = () => {
  const { t } = useTranslation();
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
      contentContainerClassName="p-4"
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
          <Text className="text-3xl text-primaryDark font-bold mb-2">
            Skupovi podataka
          </Text>

          <Text className="text-md text-neutral-700 mb-4">
            Pregledajte dostupne skupove podataka Grada Zagreba.
          </Text>

          <View className="flex-row items-center bg-white border border-neutral-300 rounded-md px-3">
            <Search size={20} color="#737373" />
            <TextInput
              placeholder="Pretraži skupove podataka"
              value={filterText}
              onChangeText={(val) => setFilterText(val)}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              className="flex-1 p-4 text-base text-neutral-700"
            />
          </View>
        </>
      }
    />
  );
};

export default DataSetsScreen;
