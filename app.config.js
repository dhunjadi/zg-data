export default {
  expo: {
    name: "Zagreb Data",
    slug: "zg-data",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "zgdata",
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.dhunjadi.zgdata",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_IOS_KEY,
        },
      },
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#f7f7f7",
        foregroundImage: "./assets/images/icon-light.png",
      },
      predictiveBackGestureEnabled: false,
      package: "com.dhunjadi.zgdata",
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_ANDROID_KEY,
        },
      },
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/icon-light.png",
          dark: {
            image: "./assets/images/icon-dark.png",
            backgroundColor: "#0f172a",
          },
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#ffffff",
          },
        },
      ],
      "expo-font",
      "expo-localization",
      "expo-image",
      "expo-status-bar",
      "expo-web-browser",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "058d4439-a15a-4a57-b8ee-84953bf7b8f5",
      },
    },
  },
};
