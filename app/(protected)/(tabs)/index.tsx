import GroupCard from "@/components/GroupCard";
import { GROUPS } from "@/constants/groups";
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [filterText, setFilterText] = useState("");

  const filteredData = GROUPS.filter((item) =>
    item.label.toLowerCase().includes(filterText.toLowerCase()),
  );

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

          <View className="flex-row items-center bg-white border border-neutral-300 rounded-md px-3 mb-6">
            <Search size={20} color="#737373" />
            <TextInput
              placeholder="Pretraži skupove podataka"
              value={filterText}
              onChangeText={(val) => setFilterText(val)}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              className="flex-1 p-4 text-base text-neutral-700"
            />
          </View>

          {filteredData.map((item) => (
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
