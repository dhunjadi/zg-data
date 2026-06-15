import { useAuth } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
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
        options={{ headerShown: true, title: "Karta" }}
      />

      <Stack.Screen
        name="dataSets"
        options={{ headerShown: true, title: "Skupovi podataka" }}
      />
    </Stack>
  );
}
