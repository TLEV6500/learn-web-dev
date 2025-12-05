import { baseConfig, prettierConfig } from "./base.js"; // ⬅️ Import the base config
import pluginLit from "eslint-plugin-lit";
import pluginLitA11y from "eslint-plugin-lit-a11y";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export const litConfig = [
  // 1. Start with the shared base configuration 🏛️
  ...baseConfig,

  // 2. Add Lit-specific configurations on top ✨
  {
    files: ["**/*.ts"], // Apply these rules only to TypeScript files
    plugins: {
      lit: pluginLit,
      "lit-a11y": pluginLitA11y,
    },
    rules: {
      ...pluginLit.configs.recommended.rules,
      ...pluginLitA11y.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.browser, // Lit components run in the browser
      },
    },
  },

  // 3. Place the Prettier config at the very end 💅
  prettierConfig,
];
