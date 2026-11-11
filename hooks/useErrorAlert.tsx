import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert } from "react-native";

export const useErrorAlert = (isError: boolean) => {
  const router = useRouter();

  useEffect(() => {
    if (!isError) return;

    Alert.alert("Something went wrong", "Try again later", [
      {
        text: "Go back",
        onPress: () => router.back(),
      },
    ]);
  }, [isError, router]);
};
