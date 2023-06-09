module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        'eqeqeq': ['error', 'always'],
        'curly': 'error',    
        'space-infix-ops': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
    },
};
