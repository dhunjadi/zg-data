import GroupCard from "@/components/GroupCard";
import { CATEGORIES } from "@/constants/categories";
import { Link } from "expo-router";
import { Search } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [filterText, setFilterText] = useState("");

  const filteredData = CATEGORIES.filter((item) =>
    item.label.toLowerCase().includes(filterText.toLowerCase()),
  );

  const getCardDescription = (dataSetLenght: number) => {
    if (dataSetLenght === 1) return `${dataSetLenght} skup podataka`;
    if (dataSetLenght > 1 && dataSetLenght < 5)
      return `${dataSetLenght} skupa podataka`;
    return `${dataSetLenght} skupova podataka`;
  };

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
            <Link key={item.id} href={`/(home)/${item.id}`} asChild>
              <Pressable>
                <GroupCard
                  {...item}
                  description={getCardDescription(item.dataSets?.length)}
                  icon={(props) => <item.icon {...props} />}
                />
              </Pressable>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
