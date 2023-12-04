# BFF2
Привет!
---
## Установка Eslint

- `npm init @eslint/config`
- `npm install -D eslint eslint-config-airbnb`

---

## Настройка .eslintrc.json

```bash
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/recommended",
        "airbnb",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "no-console": ["error", { "allow": ["warn", "error", "info"] }],
        "no-underscore-dangle": "off",
        "no-param-reassign": "off"
    }
}
```

---

# Установка **Prettier**

- `npm install -D --save-exact prettier eslint-config-prettier`
- `echo {}> .prettierrc.json`

---

### настройка .prettierrc.json

```bash
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true
}
```
