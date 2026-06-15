import GroupCard from "@/components/GroupCard";
import { CATEGORIES } from "@/constants/categories";
import { Link } from "expo-router";
import { ArrowRight, Search } from "lucide-react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { t } = useTranslation();
  const [filterText, setFilterText] = useState("");

  const filteredData = CATEGORIES.filter((item) =>
    t(item.label).toLowerCase().includes(filterText.toLowerCase()),
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
            {t("screens.home.title")}
          </Text>

          <Text className="text-md text-neutral-700 mb-8">
            {t("screens.home.description")}
          </Text>

          <View className="flex-row items-center bg-white border border-neutral-300 rounded-md px-3 mb-6">
            <Search size={20} color="#737373" />
            <TextInput
              placeholder={t("screens.home.searchInputPlaceholder")}
              value={filterText}
              onChangeText={(val) => setFilterText(val)}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              className="flex-1 p-4 text-base text-neutral-700"
            />
          </View>

          <Link href="../dataSets" className="mb-4" asChild>
            <Pressable className="flex-row items-center justify-end ">
              <Text className="text-lg text-primaryDark font-bold">
                {t("screens.home.showAllDatasets")}
              </Text>
              <ArrowRight className="" color="#005793" />
            </Pressable>
          </Link>

          {filteredData.map((item) => (
            <Link key={item.id} href={`/(home)/${item.id}`} asChild>
              <Pressable>
                <GroupCard
                  {...item}
                  label={t(item.label)}
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
