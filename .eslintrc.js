module.exports = {
    "ignorePatterns": ["webpack.config.js"],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        ["@typescript-eslint", "import"]
    ],
    "rules": {
        "no-debugger": "off",
        "no-console": 0,
        "class-methods-use-this": "off",
        "@typescript-eslint/no-explicit-any": 2,
        "endOfLine": "auto"
    }
}
