import { Tabs } from "expo-router";
import { CircleUserRound, Database, House } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import ZagrebCoA from "../../../assets/images/zagreb-grb.png";

const TabsLayout = () => {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#005793",
        headerRight: () => (
          <Image source={ZagrebCoA} className="w-8 h-8 right-5" />
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
        }}
      />

      <Tabs.Screen
        name="dataSets"
        options={{
          title: t("tabs.dataSets"),
          headerShown: true,
          popToTopOnBlur: true,
          tabBarLabel: t("tabs.dataSets"),
          tabBarIcon: ({ color, size }) => (
            <Database size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: t("tabs.account"),
          headerShown: false,
          popToTopOnBlur: true,
          tabBarLabel: t("tabs.account"),
          tabBarIcon: ({ color, size }) => (
            <CircleUserRound size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
