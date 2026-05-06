import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
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
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="home" size={size} color={color} />
          ),
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
            <Entypo name="database" size={size} color={color} />
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
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
