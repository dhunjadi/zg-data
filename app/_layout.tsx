import "@/i18n/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTranslation } from "react-i18next";
import "react-native-reanimated";
import "../global.css";

const RootLayout = () => {
  const { t } = useTranslation();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />

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
    </QueryClientProvider>
  );
};

export default RootLayout;
