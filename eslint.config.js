import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    files: ["**/*.ts"],

    plugins: {
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "prettier/prettier": "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      semi: ["error", "always"],
    },
  },

  eslintConfigPrettier,
];
