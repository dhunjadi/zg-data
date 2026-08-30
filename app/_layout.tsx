import "@/i18n/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Network from "expo-network";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GlobeOff } from "lucide-react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import "react-native-reanimated";
import "../global.css";

const RootLayout = () => {
  const { t } = useTranslation();
  const [queryClient] = useState(() => new QueryClient());

  const networkState = Network.useNetworkState();

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />

        <Stack.Screen
          name="map"
          options={{
            headerShown: true,
            title: t("screens.map.title"),
          }}
        />

        <Stack.Screen
          name="dataSets"
          options={{
            headerShown: true,
            title: t("screens.dataSets.title"),
          }}
        />
      </Stack>

      {networkState.isInternetReachable === false && (
        <View className="absolute inset-0 items-center justify-center bg-neutral-100">
          <GlobeOff size={100} color="#005793" />

          <Text className="text-xl text-primaryDark mt-4 font-bold">
            {t("screens.home.noInternet")}
          </Text>
        </View>
      )}
    </QueryClientProvider>
  );
};

export default RootLayout;
