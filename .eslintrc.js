module.exports = {
  extends: ["airbnb-base", "eslint:recommended", "plugin:react/recommended"],
  plugins: ["import", "react"],
  rules: {
    "no-console": "off",
    "import/newline-after-import": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
  },
  env: {
    browser: true
  },
  parser: "babel-eslint",
  settings: {
    react: {
      version: require("./package.json").dependencies.react
    }
  }
};
