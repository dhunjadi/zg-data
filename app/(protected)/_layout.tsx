import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  /* const { isLoggedIn } = useAuth(); */
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
