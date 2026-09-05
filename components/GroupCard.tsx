import React from "react";
import { Text, useColorScheme } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type GroupCardIconProps = {
  size: number;
  color: string;
};

type GroupCardProps = {
  icon: (props: GroupCardIconProps) => React.ReactNode;
  label: string;
  description: string;
};

const GroupCard = ({ icon, label, description }: GroupCardProps) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  return (
    <Animated.View
      key="groupCard"
      entering={FadeInDown.duration(500)}
      // eslint-disable-next-line max-len
      className={`relative w-full p-8 flex-col gap-2 ${isDarkTheme ? "bg-elementBgDark" : "bg-primaryLight"} rounded-xl overflow-hidden mb-4 ${isDarkTheme ? "border border-borderDark" : undefined}`}
    >
      {icon({ size: 48, color: isDarkTheme ? "#a3d0ff" : "white" })}
      <Text className="text-neutral-100 font-bold text-xl">{label}</Text>
      <Text className="text-neutral-100 text-xl">{description}</Text>
    </Animated.View>
  );
};

export default GroupCard;
