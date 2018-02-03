# eslint-config-standard

Standardised ESLint configuration for use across most of our front-end projects.

## Usage
`yarn add @shortlist-studio/eslint-config-standard --dev`

Then either extend from an `eslintrc` config or in your `package.json`

### `.eslintrc.json`
```json
{
  "extends": ["@shortlist-studio/eslint-config-standard"]
}
```

### `package.json`
```json
{
  "eslintConfig": {
    "extends": ["@shortlist-studio/eslint-config-standard"]
  }
}
```
