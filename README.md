# NikolaiFrontendDev

## Это моя персональная страница-портфолио Frontend-разработчика

Разработана на платформе Angular 18
Архитектура проекта схожа с "Feature-Based Folder Structure with Shared/Core Modules"

### Проект состоит из нескольких компонентов:

- layout - общий компонент (шапка, директива маршрутизатора router-outlet, подвал)
- Главная с общей информацией
- Обо мне
- Проекты
- Контакты

### И малых компонентов для общего использования

- Карточка проекта
- Анимированный компонент для стека технологий в виде солнечной системы
- Анимированный компонент-глобус планеты Земля

Компонент layout выполнил фиксированным на странице браузера, а внутри сделан скролл-контейнер с контентом.
Для этого применил декоратор @HostListener с методом window:resize

Применил google аналитику для отслеживания посещаемости страницы

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
