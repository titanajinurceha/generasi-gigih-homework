module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    env: {
        "browser": true
    },
    plugin: ["react"],
    rules: {
        "react/no-set-state": "off",
        // enable additional rules
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "for-direction": "off"
    }
};