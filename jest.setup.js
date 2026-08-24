// jest.setup.ts
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
