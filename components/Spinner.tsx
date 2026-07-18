import React from "react";
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";

type SpinnerProps = {
  size?: ActivityIndicatorProps["size"];
  theme?: "light" | "dark";
};

const Spinner = ({ size = "small", theme = "dark" }: SpinnerProps) => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <ActivityIndicator
        size={size}
        color={theme === "dark" ? "#005793" : "#f7f7f7"}
      />
    </View>
  );
};

export default Spinner;
