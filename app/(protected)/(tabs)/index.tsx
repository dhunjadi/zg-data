import GroupCard from "@/components/GroupCard";
import { GROUPS } from "@/constants/groups";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-100">
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        <View className="pt-4">
          <Text className="text-3xl text-primaryDark font-bold mb-2">
            Otvoreni podaci Grada Zagreba
          </Text>

          <Text className="text-md text-neutral-700 mb-8">
            Pristupite otvorenim bazama podataka za transparentnije i pametnije
            upravljanje gradom.
          </Text>

          {GROUPS.map((item) => (
            <GroupCard
              key={item.label}
              {...item}
              description={`${item.dataSets?.length.toString()} skupova podataka`}
              icon={(props) => <item.icon {...props} />}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
