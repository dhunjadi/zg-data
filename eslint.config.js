// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],

    rules: {
      "no-duplicate-imports": "error",
      "no-console": "warn",
      "max-len": [
        "warn",
        {
          code: 140,
        },
      ],
      camelcase: "warn",
      "no-const-assign": "error",
      "no-compare-neg-zero": "error",
      "no-constant-condition": "error",
      "no-debugger": "error",
      "no-self-compare": "error",
      "no-unreachable": "error",
      "comma-spacing": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
]);
