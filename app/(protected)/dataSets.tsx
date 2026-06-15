import DataSetItem from "@/components/DataSetItem";
import { CATEGORIES } from "@/constants/categories";
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DataSetsScreen = () => {
  const [filterText, setFilterText] = useState("");

  const flatDataSets = CATEGORIES.flatMap((category) =>
    category.dataSets.map((dataSet, index) => ({
      ...dataSet,
      id: `${category.id}-${index}`,
    })),
  );

  const filteredData = flatDataSets.filter((item) =>
    item.label.toLowerCase().includes(filterText.toLowerCase()),
  );

  return (
    <SafeAreaView className="flex-1 px-4 bg-neutral-100">
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DataSetItem {...item} icon={(props) => <item.icon {...props} />} />
          )}
          ListHeaderComponent={
            <>
              <Text className="text-3xl text-primaryDark font-bold mb-2">
                Skupovi podataka
              </Text>

              <Text className="text-md text-neutral-700 mb-8">
                Pregledajte dostupne skupove podataka Grada Zagreba.
              </Text>

              <View className="flex-row items-center bg-white border border-neutral-300 rounded-md px-3 mb-6">
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
      </View>
    </SafeAreaView>
  );
};

export default DataSetsScreen;
