import React from "react";
import { Text, View } from "react-native";

type DividerProps = {
  text?: string;
  customClassName?: string;
};

const Divider = ({ text, customClassName }: DividerProps) => {
  return (
    <View
      className={`flex-row items-center w-full ${customClassName ? customClassName : ""}`}
    >
      <View className="flex-1 h-[1px] bg-gray-300" />

      <View className="max-w-[75%]">
        {text && (
          <Text
            className="mx-4 text-neutral-500 text-sm text-center"
            numberOfLines={2}
          >
            {text}
          </Text>
        )}
      </View>

      <View className="flex-1 h-[1px] bg-gray-300" />
    </View>
  );
};

export default Divider;
