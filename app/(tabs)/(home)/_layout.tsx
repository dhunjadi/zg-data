import { CATEGORIES } from "@/constants/categories";
import { Stack, useGlobalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, useColorScheme } from "react-native";
import ZagrebCoA from "../../../assets/images/zagreb-coat-of-arms-transparent-bg.png";

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

          headerRight: () => (
            <Image
              source={ZagrebCoA}
              className="w-8 h-8 right-5"
              resizeMode="contain"
            />
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: groupTitle ? t(groupTitle) : "",
          headerShown: true,
          headerTintColor: isDarkTheme ? "#e8ebef" : undefined,
          headerStyle: {
            backgroundColor: isDarkTheme ? "#0f172a" : undefined,
          },
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
