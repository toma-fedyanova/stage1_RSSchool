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
    "plugins": ["@typescript-eslint", "import"],
    root: true,
    "rules": {
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "no-debugger": "off",
        "no-console": 0,
        "class-methods-use-this": "off",
        "@typescript-eslint/no-explicit-any": 'error',
        "@typescript-eslint/explicit-function-return-type": 'error',
        //"@typescript-eslint/no-unnecessary-type-assention": 'error',
        "max-lines-per-function": ['error', 40]
    }
}
