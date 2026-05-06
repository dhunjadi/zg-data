import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      className="flex-1 p-4"
    >
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
