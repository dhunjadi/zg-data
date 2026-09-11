import "@/i18n/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Network from "expo-network";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GlobeOff } from "lucide-react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, useColorScheme, View } from "react-native";
import "react-native-reanimated";
import "../global.css";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const { t } = useTranslation();

  const [queryClient] = useState(() => new QueryClient());
  const networkState = Network.useNetworkState();

  const isOffline = networkState.isInternetReachable === false;

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />

        <Stack.Screen
          name="map"
          options={{
            headerShown: true,
            title: t("screens.map.title"),
            headerTintColor: isDarkTheme ? "#e8ebef" : undefined,
            headerStyle: {
              backgroundColor: isDarkTheme ? "#0f172a" : undefined,
            },
          }}
        />

        <Stack.Screen
          name="dataSets"
          options={{
            headerShown: true,
            title: t("screens.dataSets.title"),
            headerTintColor: isDarkTheme ? "#e8ebef" : undefined,
            contentStyle: {
              backgroundColor: isDarkTheme ? "#0f172a" : undefined,
            },
            headerStyle: {
              backgroundColor: isDarkTheme ? "#0f172a" : undefined,
            },
          }}
        />
      </Stack>

      {isOffline && (
        <View
          className={`absolute inset-0 items-center justify-center ${isDarkTheme ? "bg-screenBgDark" : "bg-neutral-100"}`}
        >
          <GlobeOff size={100} color={isDarkTheme ? "#e8b74b" : "#005793"} />

          <Text
            className={`text-xl ${isDarkTheme ? "text-highlight" : "text-primaryDark"} mt-4 font-bold`}
          >
            {t("screens.home.noInternet")}
          </Text>
        </View>
      )}
    </QueryClientProvider>
  );
};

export default RootLayout;
