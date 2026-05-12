import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DataSetGroupScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>DataSetGroupScreen {id}</Text>
    </View>
  );
};

export default DataSetGroupScreen;
