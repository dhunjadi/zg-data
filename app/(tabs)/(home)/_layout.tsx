import { CATEGORIES } from "@/constants/categories";
import { Stack, useGlobalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, useColorScheme } from "react-native";
import ZagrebCoA from "../../../assets/images/zagreb-grb.png";

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
              style={{ width: 30, height: 30, marginRight: 15 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: groupTitle ? t(groupTitle) : "",
          headerShown: true,
          headerBackTitle: "Natrag",
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
