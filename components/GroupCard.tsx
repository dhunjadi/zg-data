import React from "react";
import { Text, View } from "react-native";

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
    <View className="relative w-full p-8 flex-col gap-4 bg-primaryDark rounded-xl overflow-hidden mb-4">
      {icon({ size: 48, color: "white" })}
      <Text className="text-white font-bold text-xl">{label}</Text>
      <Text className="text-white/50 font-bold text-xl">{description}</Text>

      <View className="absolute inset-y-0 right-12 flex justify-center items-end opacity-20">
        {icon({ size: 72, color: "white" })}
      </View>
    </View>
  );
};

export default GroupCard;
