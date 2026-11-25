// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    // eslint의 jsconfig.json 파일 읽기
    settings: {
      "import/resolver": {
        typescript: {
          project: "./jsconfig.json",
        },
      },
    },
    ignores: ["dist/*", ".expo/*", "node_modules/*", "android/*", "ios/*", ".git/*"],
  },
]);
