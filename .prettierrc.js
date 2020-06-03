module.exports = {
    bracketSpacing: true,
    parserOptions: {
         ecmaVersion: 2020,
         sourceType: "module"
    },
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
     ],
    jsxBracketSameLine: false,
    singleQuote: true,
    trailingComma: 'all',
    semi: true,
    printWidth: 120,
    tabWidth: 2,
  };