import DataSetItem from "@/components/DataSetItem";
import { CATEGORIES } from "@/constants/categories";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DataSetGroupScreen = () => {
  const { id } = useLocalSearchParams();

  const category = CATEGORIES.find((item) => item.id === id);

  return (
    <SafeAreaView className="flex-1 px-4 bg-neutral-100">
      <FlatList
        data={category?.dataSets}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <DataSetItem {...item} icon={(props) => <item.icon {...props} />} />
        )}
        ListHeaderComponent={
          <>
            <Text className="text-3xl text-primaryDark font-bold mb-2">
              Skupovi podataka
            </Text>

            <Text className="text-md text-neutral-700 mb-8">
              Pregledajte dostupne skupove podataka iz kategorije:{" "}
              {category?.label}.
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default DataSetGroupScreen;
