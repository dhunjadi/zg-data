import { useCallback } from "react";
import { Alert, Linking, Pressable, Text, useColorScheme } from "react-native";

type OpenURLLinkProps = {
  url: string;
  label: string;
};

const URLLink = ({ url, label }: OpenURLLinkProps) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const handlePress = useCallback(async () => {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress}>
      <Text
        className={`text-base ${isDarkTheme ? "text-highlight" : "text-primaryDark"} underline`}
      >
        {label ?? url}
      </Text>
    </Pressable>
  );
};

export default URLLink;
