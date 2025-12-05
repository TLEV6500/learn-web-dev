import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import turboPlugin from "eslint-plugin-turbo";
// import onlyWarn from "eslint-plugin-only-warn";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export const baseConfig = [
    // Start with recommended configs
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // Define plugins and rules for the whole monorepo
    {
        plugins: {
            turbo: turboPlugin,
            // onlyWarn,
        },
        rules: {
            "turbo/no-undeclared-env-vars": "warn",
        },
        languageOptions: {
            globals: {
                ...globals.node, // Assumes a Node.js environment for most tooling
            },
        },
    },
];

/** @type {import('eslint').Linter.FlatConfig} */
export const prettierConfig = eslintConfigPrettier;
