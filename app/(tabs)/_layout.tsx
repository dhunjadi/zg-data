import { Tabs } from "expo-router";
import { House, Settings } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { Image, useColorScheme } from "react-native";
import ZagrebCoA from "../../assets/images/zagreb-coat-of-arms-transparent-bg.png";

const TabsLayout = () => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDarkTheme ? "#e8b74b" : "#005793",
        tabBarInactiveTintColor: isDarkTheme ? "#3d444e" : undefined,
        headerRight: () => (
          <Image
            source={ZagrebCoA}
            className="w-8 h-8 right-5"
            resizeMode="contain"
          />
        ),
      }}
      backBehavior="order"
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Otvoreni podaci Zagreb",
          headerShown: false,
          tabBarLabel: t("tabs.home"),
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
          tabBarStyle: { backgroundColor: isDarkTheme ? "#0f172a" : "#f5f5f5" },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: t("tabs.settings"),
          headerShown: true,
          popToTopOnBlur: true,
          tabBarLabel: t("tabs.settings"),
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
          tabBarStyle: { backgroundColor: isDarkTheme ? "#0f172a" : "#f5f5f5" },
          headerTintColor: isDarkTheme ? "#e8ebef" : undefined,
          headerStyle: {
            backgroundColor: isDarkTheme ? "#0f172a" : undefined,
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
