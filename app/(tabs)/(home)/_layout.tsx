import { CATEGORIES } from "@/constants/categories";
import { Stack, useGlobalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";

const HomeLayout = () => {
  const { t } = useTranslation();
  const { id } = useGlobalSearchParams();
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const groupTitle = CATEGORIES.find((item) => item.id === id)?.label;
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true, // Show it ONLY on the index
          title: t("screens.home.headerTitle"),
          headerTintColor: isDarkTheme ? "#e8ebef" : undefined,
          headerStyle: {
            backgroundColor: isDarkTheme ? "#0f172a" : undefined,
          },
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: groupTitle ? t(groupTitle) : "",
          headerShown: true,
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
  );
};

export default HomeLayout;
