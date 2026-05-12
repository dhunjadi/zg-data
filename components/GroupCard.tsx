import React from "react";
import { Text } from "react-native";
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
  return (
    <Animated.View
      key="groupCard"
      entering={FadeInDown.duration(500)}
      className="relative w-full p-8 flex-col gap-2 bg-primaryLight rounded-xl overflow-hidden mb-4"
    >
      {icon({ size: 48, color: "white" })}
      <Text className="text-white font-bold text-xl">{label}</Text>
      <Text className="text-white text-xl">{description}</Text>
    </Animated.View>
  );
};

export default GroupCard;
