import GroupCard from "@/components/GroupCard";
import {
  Building2,
  Gavel,
  GraduationCap,
  HeartPulse,
  Landmark,
  Microscope,
  PersonStanding,
  Road,
  Sprout,
  TreePine,
  Wallet,
} from "lucide-react-native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const groups = [
    { label: "Obrazovanje, kultura i sport", icon: GraduationCap },
    { label: "Regije i gradovi", icon: Building2 },
    { label: "Ekonomije i financije", icon: Wallet },
    { label: "Javni sektor i ustanove", icon: Landmark },
    { label: "Okoliš", icon: TreePine },
    { label: "Poljoprivreda, ribarstvo, šumarstvo i hrana", icon: Sprout },
    {
      label: "Pravosuđe, pravni sustav i javna sigurnost",
      icon: Gavel,
    },
    { label: "Promet", icon: Road },
    { label: "Stanovništvo i društvo", icon: PersonStanding },
    { label: "Zdravstvo", icon: HeartPulse },
    { label: "Znanost i tehnologija", icon: Microscope },
  ];

  return (
    <SafeAreaView className="flex-1 px-4 bg-neutral-100">
      <View>
        <FlatList
          data={groups}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <GroupCard
              label={item.label}
              icon={(props) => <item.icon {...props} />}
            />
          )}
          ListHeaderComponent={
            <>
              <Text className="text-3xl text-primaryDark font-bold mb-2">
                Otvoreni podaci Grada Zagreba
              </Text>

              <Text className="text-md text-neutral-700 mb-8">
                Pristupite otvorenim bazama podataka za transparentnije i
                pametnije upravljanje gradom.
              </Text>
            </>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
