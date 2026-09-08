import Divider from "@/components/Divider";
import { Moon, Sun } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import {
  Appearance,
  Pressable,
  Text,
  useColorScheme,
  View,
} from "react-native";

const languages = ["hr", "en"];

const themes = [
  { icon: Sun, value: "light" },
  { icon: Moon, value: "dark" },
];

const settingsPressableStyles = {
  dark: {
    selected: {
      button: "bg-highlight border-primaryDark",
      text: "text-screenBgDark",
      icon: "#0b1829",
    },
    unselected: {
      button: "bg-screenBgDark border-highlight",
      text: "text-highlight",
      icon: "#f5f5f5",
    },
  },
  light: {
    selected: {
      button: "bg-primaryDark border-primaryDark",
      text: "text-neutral-100",
      icon: "#f5f5f5",
    },
    unselected: {
      button: "bg-white border-gray-300",
      text: "text-primaryDark",
      icon: "#0b1829",
    },
  },
};

const getPressableStyles = (isDarkTheme: boolean, isSelected: boolean) =>
  settingsPressableStyles[isDarkTheme ? "dark" : "light"][
    isSelected ? "selected" : "unselected"
  ];

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
        {languages.map((lng) => {
          const { button, text } = getPressableStyles(
            isDarkTheme,
            currentLanguage === lng,
          );

          return (
            <Pressable
              key={lng}
              onPress={() => i18n.changeLanguage(lng)}
              className={`flex-1 p-4 rounded-md items-center border ${button}`}
            >
              <Text className={`font-bold ${text}`}>{lng.toUpperCase()}</Text>
            </Pressable>
          );
        })}
      </View>

      <Divider text={t("screens.settings.theme")} />
      <View className="flex-row gap-2">
        {themes.map((scheme) => {
          const { button, icon } = getPressableStyles(
            isDarkTheme,
            colorScheme === scheme.value,
          );

          return (
            <Pressable
              key={scheme.value}
              onPress={() => {
                Appearance.setColorScheme(scheme.value as "dark" | "light");
              }}
              className={`flex-1 p-4 rounded-md items-center border ${button}`}
            >
              <scheme.icon size={20} color={icon} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default SettingsScreen;
