import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      quotes: ["error", "single", {avoidEscape: true}],
      "import/order": ["error", {"newlines-between": "always"}],
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "jsx-a11y/anchor-is-valid": "warn",
      "prettier/prettier": ["error", {singleQuote: true}],
    },
  },
];

export default eslintConfig;
