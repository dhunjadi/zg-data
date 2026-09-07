import { Text, useColorScheme, View } from "react-native";

type DividerProps = {
  text?: string;
  customClassName?: string;
};

const Divider = ({ text, customClassName }: DividerProps) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  return (
    <View
      className={`flex-row items-center w-full ${customClassName ? customClassName : ""}`}
    >
      <View
        className={`flex-1 h-[1px] ${isDarkTheme ? "bg-highlight" : "bg-gray-300"}`}
      />

      <View className="max-w-[75%]">
        {text && (
          <Text
            className={`mx-4 ${isDarkTheme ? "text-highlight" : "text-neutral-500"} text-sm text-center`}
            numberOfLines={2}
          >
            {text}
          </Text>
        )}
      </View>

      <View
        className={`flex-1 h-[1px] ${isDarkTheme ? "bg-highlight" : "bg-gray-300"}`}
      />
    </View>
  );
};

export default Divider;
