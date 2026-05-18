import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import Divider from "./Divider";

type GroupCardIconProps = {
  size: number;
  color: string;
};

type DataSetItemProps = {
  icon: (props: GroupCardIconProps) => React.ReactNode;
  label: string;
  description: string;
  fetchUrl?: string;
};

const DataSetItem = ({
  icon,
  label,
  description,
  fetchUrl,
}: DataSetItemProps) => {
  const handlePress = () => {
    if (!fetchUrl) return;

    router.push({
      pathname: "/map",
      params: { fetchUrl },
    });
  };

  return (
    <Pressable disabled={!fetchUrl} onPress={handlePress}>
      <Divider />
      <Animated.View
        key="dataSetItem"
        entering={FadeInDown.duration(500)}
        className="flex-row"
      >
        <View className="bg-blue-100 p-4 rounded-xl">
          {icon({ size: 32, color: "#005793" })}
        </View>

        <View className="flex-col justify-center ml-4">
          <Text className="text-primaryDark font-bold text-xl">{label}</Text>
          <Text>{description}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default DataSetItem;
