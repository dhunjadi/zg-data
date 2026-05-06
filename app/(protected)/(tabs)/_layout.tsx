import { Tabs } from "expo-router";
import { CircleUserRound, Database, House } from "lucide-react-native";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#005793" }}
      backBehavior="order"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Otvoreni podaci Zagreb",
          headerShown: true,
          tabBarLabel: "Početna",
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="dataSets"
        options={{
          title: "DataSets",
          headerShown: false,
          popToTopOnBlur: true,
          tabBarLabel: "Skupovi podataka",
          tabBarIcon: ({ color, size }) => (
            <Database size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          popToTopOnBlur: true,
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <CircleUserRound size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
