
# 🏨 Система Бронирования

[![NestJS](https://img.shields.io/badge/NestJS-vX.X.X-red)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-vX.X.X-blue)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-vX.X-blue)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-vX.X.X-blue)](https://www.docker.com/)
[![Yarn](https://img.shields.io/badge/Yarn-vX.X.X-blue)](https://yarnpkg.com/)

Монорепозиторий для системы бронирования, созданный с использованием NestJS, Prisma и PostgreSQL.

## 📜 Оглавление

- [Начало работы](#начало-работы)
  - [Предварительные требования](#предварительные-требования)
  - [Установка](#установка)
- [🚀 Использование](#-использование)
  - [Запуск приложения](#запуск-приложения)
  - [Запуск тестов](#запуск-тестов)
- [🛠️ Используемые технологии](#️-используемые-технологии)
- [Структура проекта](#структура-проекта)
- [🤝 Участие в разработке](#-участие-в-разработке)
- [📄 Лицензия](#-лицензия)

## Начало работы

Следуйте этим инструкциям, чтобы получить копию проекта и запустить ее на локальной машине для разработки и тестирования.

### Предварительные требования

- [Node.js](https://nodejs.org/en/) (v16 или выше)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/get-started)

### Установка

1.  **Клонируйте репозиторий:**
    ```bash
    git clone <repository-url>
    ```
2.  **Перейдите в каталог `backend`:**
    ```bash
    cd backend
    ```
3.  **Установите зависимости:**
    ```bash
    yarn install
    ```
4.  **Настройте переменные окружения:**
    Создайте файл `.env` в каталоge `backend` и добавьте следующее:
    ```env
    POSTGRES_USER=user
    POSTGRES_PASSWORD=password
    DATABASE_URL="postgresql://user:password@localhost:5433/reservation"
    HTTP_PORT=3000
    HTTP_HOST=http://localhost:3000
    ```

## 🚀 Использование

### Запуск приложения

1.  **Запустите базу данных:**
    ```bash
    docker-compose up -d
    ```
2.  **Выполните миграцию базы данных:**
    ```bash
    npx prisma migrate dev
    ```
3.  **Запустите сервер:**
    ```bash
    yarn run start:dev
    ```
    Сервер будет запущен по адресу, указанному в `HTTP_HOST`.

### Запуск тестов

- **Модульные тесты:**
  ```bash
  yarn run test
  ```
- **End-to-End тесты:**
  ```bash
  yarn run test:e2e
  ```

## 🛠️ Используемые технологии

- **Бэкенд:**
  - [NestJS](https://nestjs.com/) - Прогрессивный фреймворк Node.js для создания эффективных, надежных и масштабируемых серверных приложений.
  - [Prisma](https://www.prisma.io/) - ORM следующего поколения для Node.js и TypeScript.
  - [PostgreSQL](https://www.postgresql.org/) - Мощная объектно-реляционная система баз данных с открытым исходным кодом.
- **База данных:**
  - [Docker](https://www.docker.com/) - Платформа для разработки, доставки и запуска приложений в контейнерах.
- **Менеджер пакетов:**
  - [Yarn](https://yarnpkg.com/) - Быстрое, надежное и безопасное управление зависимостями.

## Структура проекта

```
.
├── backend
│   ├── prisma
│   │   └── schema.prisma
│   ├── src
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── modules
│   └── ...
└── ...
```

> Схема базы данных управляется с помощью Prisma. Схема определена в `backend/prisma/schema.prisma`. Чтобы обновить схему, измените этот файл и выполните `npx prisma migrate dev`.
