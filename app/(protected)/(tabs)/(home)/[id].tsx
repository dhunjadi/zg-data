import DataSetItem from "@/components/DataSetItem";
import { CATEGORIES } from "@/constants/categories";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Text } from "react-native";

const DataSetGroupScreen = () => {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams();

  const category = CATEGORIES.find((item) => item.id === id);

  return (
    <FlatList
      data={category?.dataSets}
      keyExtractor={(item) => item.label}
      contentContainerClassName="p-4"
      renderItem={({ item, index }) => (
        <DataSetItem
          {...item}
          label={t(item.label)}
          description={t(item.description)}
          customClassName={
            category?.dataSets.length === index + 1 ? "pb-2" : ""
          }
          icon={(props) => <item.icon {...props} />}
        />
      )}
      ListHeaderComponent={
        <>
          <Text className="text-3xl text-primaryDark font-bold mb-2">
            Skupovi podataka
          </Text>

          <Text className="text-md text-neutral-700">
            Pregledajte dostupne skupove podataka iz kategorije:{" "}
            {category ? t(category.label) : ""}.
          </Text>
        </>
      }
    />
  );
};

export default DataSetGroupScreen;
