module.exports = {
    "ignorePatterns": ["webpack.config.js", "style.css.d.ts", "declare.d.ts"],
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
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        "max-lines-per-function": ['error', 40],
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-explicit-any": 'error',
        "@typescript-eslint/explicit-function-return-type": 'error',
    }
}
