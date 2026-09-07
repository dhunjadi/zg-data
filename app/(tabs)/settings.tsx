import Divider from "@/components/Divider";
import { useTranslation } from "react-i18next";
import { Pressable, Text, useColorScheme, View } from "react-native";

const languages = ["hr", "en"];

const SettingsScreen = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language.startsWith("en") ? "en" : "hr";
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  return (
    <View
      className={`${isDarkTheme ? "bg-screenBgDark" : "bg-neutral-100"} flex-1 p-4 gap-4`}
    >
      <Divider text={t("screens.settings.language")} />
      <View className="flex-row gap-2">
        {languages.map((lng) => (
          <Pressable
            key={lng}
            onPress={() => i18n.changeLanguage(lng)}
            className={`flex-1 p-4 rounded-md items-center border ${
              currentLanguage === lng && isDarkTheme
                ? "bg-highlight border-primaryDark"
                : "bg-screenBgDark border-highlight"
            }`}
          >
            <Text
              className={`font-bold ${
                currentLanguage === lng && isDarkTheme
                  ? "text-screenBgDark"
                  : "text-highlight"
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
