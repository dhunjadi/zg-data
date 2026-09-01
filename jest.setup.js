require("react-native-reanimated/mock");
import "react-native-gesture-handler/jestSetup";
import "./i18n/i18n";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key, options) => {
      // Mirrors real i18next enough for tests: returns the key itself,
      // appending interpolation options like {count} if passed.
      if (options && typeof options === "object") {
        const opts = Object.entries(options)
          .map(([k, v]) => `${k}:${v}`)
          .join(", ");
        return opts ? `${key} (${opts})` : key;
      }
      return key;
    },
    i18n: {
      changeLanguage: () => Promise.resolve(),
      language: "en",
    },
  }),
  initReactI18next: { type: "3rdParty", init: () => {} },
  Trans: ({ children }) => children,
}));

require("react-native-reanimated/mock");

jest.mock("react-native-maps", () => {
  const React = require("react");
  const { View } = require("react-native");

  const MapView = ({ children, ...props }) => (
    <View {...props}>{children}</View>
  );

  const Marker = ({ children, ...props }) => <View {...props}>{children}</View>;

  const Callout = ({ children, ...props }) => (
    <View {...props}>{children}</View>
  );

  MapView.Marker = Marker;
  MapView.Callout = Callout;

  return {
    __esModule: true,
    default: MapView,
    MapView,
    Marker,
    Callout,
    PROVIDER_GOOGLE: "google",
  };
});

jest.mock("react-native-map-clustering", () => {
  const React = require("react");
  const { View } = require("react-native");

  const MockMapView = ({ children, ...props }) => (
    <View {...props}>{children}</View>
  );

  MockMapView.Marker = ({ children, ...props }) => (
    <View {...props}>{children}</View>
  );

  MockMapView.Callout = ({ children, ...props }) => (
    <View {...props}>{children}</View>
  );

  return MockMapView;
});
