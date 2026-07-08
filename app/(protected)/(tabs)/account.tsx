import Divider from "@/components/Divider";
import { auth } from "@/FirebaseConfig";
import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const languages = ["hr", "en"];

const AccountScreen = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language.startsWith("en") ? "en" : "hr";

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        // eslint-disable-next-line no-console
        console.log(error);
        alert("Sign out failed: " + error.message);
      }
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1 p-4 gap-4">
      <Divider text={t("screens.account.language")} />
      <View className="flex-row gap-2">
        {languages.map((lng) => (
          <Pressable
            key={lng}
            onPress={() => i18n.changeLanguage(lng)}
            className={`flex-1 p-4 rounded-md items-center border ${
              currentLanguage === lng
                ? "bg-primaryDark border-primaryDark"
                : "bg-white border-gray-300"
            }`}
          >
            <Text
              className={`font-bold ${
                currentLanguage === lng ? "text-white" : "text-primaryDark"
              }`}
            >
              {lng.toUpperCase()}
            </Text>
          </Pressable>
        ))}
      </View>

      <Divider />

      <Pressable
        onPress={handleLogout}
        className="w-full flex-row gap-2 bg-primaryDark p-4 rounded-md justify-center items-center"
      >
        <Text className="text-white font-bold">
          {t("screens.account.signOut")}
        </Text>
        <LogOut color="white" />
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountScreen;
