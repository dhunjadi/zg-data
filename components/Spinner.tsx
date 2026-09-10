import {
  ActivityIndicator,
  ActivityIndicatorProps,
  useColorScheme,
  View,
} from "react-native";

type SpinnerProps = {
  size?: ActivityIndicatorProps["size"];
};

const Spinner = ({ size = "small" }: SpinnerProps) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  return (
    <View className="flex flex-1 items-center justify-center">
      <ActivityIndicator
        size={size}
        color={isDarkTheme ? "#e8b74b" : "#005793"}
        testID="loading-spinner"
      />
    </View>
  );
};

export default Spinner;
