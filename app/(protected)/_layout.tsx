import { useAuth } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";
import { useTranslation } from "react-i18next";

export default function ProtectedLayout() {
  const { t } = useTranslation();
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="map"
        options={{ headerShown: true, title: t("screens.map.title") }}
      />

      <Stack.Screen
        name="dataSets"
        options={{ headerShown: true, title: t("screens.dataSets.title") }}
      />
    </Stack>
  );
}
