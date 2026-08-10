import Divider from "@/components/Divider";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

const languages = ["hr", "en"];

const SettingsScreen = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language.startsWith("en") ? "en" : "hr";

  return (
    <View className="bg-white flex-1 p-4 gap-4">
      <Divider text={t("screens.settings.language")} />
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
    </View>
  );
};

export default SettingsScreen;
