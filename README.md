# News-nyt app

- Тестовое задание.
- Мобильная версия веб-приложения новостного сайта.
- Макет разрабатываемой страницы нарисован в Figma.
- Backend часть реализована на стороне REST API New York Times.

## Запуск проекта

1. Установить зависимости:

```sh
npm i
```

2. Запустить приложение:

```sh
npm run dev
```

## Стек

- React 19 + TypeScript
- Vite
- Redux Toolkit
- Методология FSD (Feature-Sliced Design)

## Архитектура

Проект структурирован по FSD:

- `app` — всё, благодаря чему приложение запускается
- `pages` — страницы приложения
- `widgets` — сборка сущностей и фич
- `features` — функционал (фильтрация, очистка завершённых)
- `entities` — бизнес-сущности
- `shared` — переиспользуемые утилиты и компоненты

### Сегмент `styles` слоя `app`

```
📦 styles/
├─ 📂 base/
│  ├─ 📄 reset.scss                 // сброс стилей
│  └─ 📄 typography.scss            // подключение шрифта
├─ 📂 tools/                        // SASS утилиты
│  ├─ 📄 adaptiveValue.scss
│  ├─ 📄 breakpoints.scss
│  └─ 📄 functions.scss
├─ 📂 variables/                    // переменные SASS CSS
│  ├─ 📂 themes/
│  │  ├─ 📄 dark.scss
│  │  └─ 📄 light.scss
│  ├─ 📄 css-custom-properties.scss
│  └─ 📄 scss-variables.scss
├─ 📄 global.scss                    // импортируется в main.tsx
└─ 📄 module-tools.scss              // глобальный SASS для модулей компонентов
```
