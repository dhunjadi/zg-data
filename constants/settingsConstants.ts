export const settingsPressableStyles = {
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
