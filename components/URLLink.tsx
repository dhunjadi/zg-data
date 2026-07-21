import { useCallback } from "react";
import { Alert, Linking, Pressable, Text } from "react-native";

/* const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456"; */

type OpenURLLinkProps = {
  url: string;
  label: string;
};

const URLLink = ({ url, label }: OpenURLLinkProps) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress}>
      <Text className="text-base text-primaryDark underline">
        {label ?? url}
      </Text>
    </Pressable>
  );
};

export default URLLink;
