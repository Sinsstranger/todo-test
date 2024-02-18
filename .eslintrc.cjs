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
    // start - отключал правила, чтобы не было ошибок при импорте, в остальном по логике работает штатно
		"import/no-unresolved": "off",
    "import/namespace": "off",
    "import/no-duplicates": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "import/no-self-import": "off",
    "import/no-relative-packages": "off",
    "import/default": "off",
    "import/extensions": "off",
    "import/order": "off",
    "import/no-cycle": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "error",
    // end
		"react-refresh/only-export-components": [
			"warn", // Использует уровень предупреждения
			{ allowConstantExport: true }, // Разрешает постоянный экспорт для компонентов
		],
	},
	settings: {
		react: { version: "18.2" }, // Указывает версию React для правил плагина
		"import/resolver": {
			node: { extensions: [".js", ".ts", ".jsx", ".tsx"] }, // Разрешает расширения
			alias: {
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