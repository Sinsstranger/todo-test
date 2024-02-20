const { resolve } = require("path");

module.exports = {
	root: true, // Устанавливает эту конфигурацию ESLint как корневую
	env: { browser: true, es2020: true }, // Включает браузерную и современную JS-среду
	extends: [
		"eslint:recommended", // Базовые правила из ядра ESLint
		"airbnb",
		"plugin:react/recommended", // Базовые правила React
		"plugin:react/jsx-runtime", // Правила для поведения JSX-среды выполнения
		"plugin:react-hooks/recommended", // Рекомендации по использованию React Hooks
		"plugin:import/recommended", // Основные правила импорта
		"plugin:prettier/recommended", // Интегрирует Prettier с ESLint
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"], // Игнорирует эти файлы
	parserOptions: {
		ecmaVersion: "latest", // Использует последнюю версию ECMAScript
		sourceType: "module", // Предполагает модули (по умолчанию в современном JS)
	},
	plugins: ["react-refresh", "import"], // Используемые плагины
	rules: {
		// Отключенные правила based on preferences or project setup
		"react/display-name": "off",
		"react/jsx-no-target-blank": "off",
		"react-refresh/only-export-components": [
			"warn", // Использует уровень предупреждения
			{ allowConstantExport: true }, // Разрешает постоянный экспорт для компонентов
		],
	},
	settings: {
		react: { version: "18.2" }, // Указывает версию React для правил плагина
		"import/resolver": {
			node: { extensions: [".js", ".ts", ".jsx", ".tsx"], paths: ['src'] }, // Разрешает расширения
			alias: {
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
				map: [
					// Использует более описательное имя псевдонима
					["@core", resolve(__dirname, "src")], // Псевдоним для основных компонентов
					["@assets", resolve(__dirname, "src/assets")], // Псевдоним для ресурсов
          ["@reducers", resolve(__dirname, "src/reducers")],
				],
			},
		},
	},
};