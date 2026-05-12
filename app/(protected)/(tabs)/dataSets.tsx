import DataSetItem from "@/components/DataSetItem";
import { DATASETS } from "@/constants/dataSets";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DataSets = () => {
  return (
    <SafeAreaView className="flex-1 px-4 bg-neutral-100">
      <View>
        <FlatList
          data={DATASETS}
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
                Pregledajte dostupne skupove podataka Grada Zagreba.
              </Text>
            </>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default DataSets;
