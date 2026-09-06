import { router } from "expo-router";
import React from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";
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
  id?: string;
  fetchUrl?: string;
  customClassName?: string;
};

const DataSetItem = ({
  icon,
  label,
  description,
  id,
  fetchUrl,
  customClassName,
}: DataSetItemProps) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const handlePress = () => {
    if (!id && !fetchUrl) return;

    router.push({
      pathname: "/map",
      params: { datasetId: id, fetchUrl, label },
    });
  };

  return (
    <Pressable
      disabled={!id && !fetchUrl}
      onPress={handlePress}
      className={customClassName}
    >
      <Divider customClassName="my-6 " />
      <Animated.View
        key="dataSetItem"
        entering={FadeInDown.duration(500)}
        className="flex-row"
      >
        <View
          className={`${isDarkTheme ? "bg-elementBgDark" : "bg-primaryLight"} p-4 rounded-xl justify-center`}
        >
          {icon({ size: 32, color: isDarkTheme ? "#8baedd" : "#f5f5f5" })}
        </View>

        <View className="flex-1 justify-center ml-4">
          <Text
            className={`${isDarkTheme ? "text-textDarkPimary" : "text-primaryDark"} font-bold text-xl"`}
          >
            {label}
          </Text>

          <Text
            className={`${isDarkTheme ? "text-textDarkPimary" : undefined}`}
          >
            {description}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default DataSetItem;
