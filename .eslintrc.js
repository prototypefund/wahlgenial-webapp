module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "window": true,
        "define": true,
        "require": true,
        "module": true,
        "$": true,
    },
    "extends": "standard",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "es6": true,
        },
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "react"
    ],
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "single" ],
        "react/jsx-boolean-value": 0,
        "react/jsx-curly-spacing": [2, "always"],
        "react/jsx-indent-props": [1, 2],
        "react/jsx-no-undef": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/react-in-jsx-scope": 1,
        "react/prefer-es6-class": 1,
        "react/jsx-no-bind": 0,
    }
};
