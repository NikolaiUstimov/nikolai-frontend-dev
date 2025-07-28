import {CardType} from '../types';

export const SliderContents: CardType[] = [
  {
    id: 1,
    title: "Лендинг о путешествиях в Каппадокию",
    desc: "Выполнен с применением HTML, Less, JavaScript, Сборщик Gulp. Дополнительно использовались библиотеки JQuery, JQuery magnific-popup, Slick.js, WOW.js",
    img: "images/cappadocia.webp",
    url: "https://github.com/NikolaiUstimov/Project---Travel-Agency---Kappadocia"
  },
  {
    id: 2,
    title: "Лендинг c Макарунами",
    desc: "Выполнен с применением HTML, CSS, JavaScript, Сборщик Gulp. Далее перенос лендинга на Angular 14, с типизацией для продуктов и преимуществ, простая валидация формы, отображение подарка при оформлении заказа",
    img: "images/macaroons.webp",
    url: "https://github.com/NikolaiUstimov/Angular-makaroons-app"
  },
  {
    id: 3,
    title: "SPA приложение по учёту финансов с API",
    desc: "Выполнен с применением HTML, CSS, JavaScript, Сборщик Webpack. Настройка самописного роутинга, авторизация и регистрация с применением JWT-токенов. Для каждой страницы реализован отдельный класс и темплейты и стили к ним. Дополнительно использовалась библиотека Chart.js для отображения графика. Далее проект перенесён на TypeScript.",
    img: "images/lumincoin.webp",
    url: "https://github.com/NikolaiUstimov/Lumincoin-financeTypeScript"
  },
  {
    id: 4,
    title: "Сайт Web-студии типа SPA с API",
    desc: "Выполнен на Angular 17, стили на SCSS. JWT Auth, Signals (комментарии, пользователь). Основные страницы: главная - с общей информацией, блог - со статьями, страницы для каждой статьи из блога, авторизация и регистрация. Реализованы лайки для статей и фильтрация статей. Использованы кастомные слайдеры с анимацией из @angular/animations, модальное окно с изменяемыми параметрами. Подключение Yandex-карты.",
    img: "images/webstudio.webp",
    url: "https://gitlab.com/NikolaiUstimov/web-studio"
  },
  {
    id: 5,
    title: "Интернет магазин цветов по типу SPA с API",
    desc: "Выполнен на Angular 14, стили на SCSS. JWT Auth. Основные страницы: главная, каталог товаров, товар отдельно, корзина, личный кабинет пользователя. На странице каталога реализована большая фильтрация по типам товаров и их размерам. Подключение Yandex-карты. Проект выполнен с ментором!",
    img: "images/im.webp",
    url: "https://github.com/NikolaiUstimov/Angular-IM-flowers"
  },
  {
    id: 6,
    title: "Мини соцсеть Tik-talk",
    desc: "Выполнен на Angular 17, стили на SCSS. JWT Auth, Signals (комментарии, пользователь). Основные страницы: авторизация, сайдбар, посты пользователя, чаты, поиск пользователей. Реализованы комментарии к статьям со временем создания. Выполнена миграция на архитектуру NX. Проект выполнен с ментором!",
    img: "images/tik-talk.webp",
    url: "https://gitlab.com/NikolaiUstimov/tik-talk"
  },
]
