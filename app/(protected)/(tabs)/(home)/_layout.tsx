import { GROUPS } from "@/constants/groups";
import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";
import { Image } from "react-native";
import ZagrebCoA from "../../../../assets/images/zagreb-grb.png";

const HomeLayout = () => {
  const { id } = useGlobalSearchParams();
  const groupTitle = GROUPS.find((item) => item.id === id)?.label;
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true, // Show it ONLY on the index
          title: "Otvoreni podaci Zagreb",
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
          title: groupTitle || "",
          headerShown: true,
          headerBackTitle: "Natrag",
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
