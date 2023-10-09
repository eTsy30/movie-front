Часть 1: Фронтенд-приложение (React)
Инструкции для фронтенд-приложения:

Создайте фронтенд-приложение, используя React в качестве основной технологической стека.
Приложение должно иметь следующие функции:
Отображение списка фильмов, которые пользователи хотят посмотреть.
Отображение списка просмотренных фильмов.
Возможность пользователям добавлять новые фильмы в свой список для просмотра.
Реализация простой системы рейтинга фильмов (от 1 до 5 звезд) для оценки фильмов пользователями.
Включение кнопки для удаления фильмов из списка для просмотра.
(Необязательно): Если вы найдете бесплатное и удобное API с информацией о фильмах, то вы можете добавить на сервер запрос с названием фильма и сохранить информацию о нём. Если это удалось, то отобразите информацию о фильме, включая название, год выпуска, жанр и краткое описание (или те данные, которые отдаст API).
Используйте React для создания пользовательского интерфейса и, при необходимости, вы можете использовать любые библиотеки для работы с роутами, стейтом, запросами и так далее.
Часть 2: Сервер Node.js
Инструкции для сервера Node.js:

Создайте сервер Node.js для обработки операций CRUD для фильмов в списке для просмотра.
Сервер должен предоставлять следующие конечные точки:
GET /movies: Получить список фильмов в списке для просмотра.
POST /movies: Добавить новый фильм в список для просмотра.
PUT /movies/:movieId: Обновить рейтинг фильма.
DELETE /movies/:movieId: Удалить фильм из списка для просмотра.
Храните данные о фильмах на сервере с использованием массива или простой структуры данных в памяти (нет необходимости использовать базу данных).
Обеспечьте правильную обработку ошибок и проверку данных для каждой конечной точки.
(Необязательно): Реализуйте поиск по всем фильмам и/или фильтры. Этот функционал не нужно реализовывать во фронтенд приложении, а можно реализовать на сервере.
Критерии оценки:
Кандидаты будут оцениваться по следующим критериям:

Фронтенд-приложение (React) от самого важного к менее важному:

Скорость: Одним из главных критериев выполнения будет скорость. Не нужно пытаться сделать все идеально с точки зрения кода и архитектуры. Соотношение скорость/качество - ключевой критерий при проверке задания. Но и должно все работать 😀
Функциональность: Корректно ли приложение обрабатывает операции CRUD для фильмов и оценки пользователей?
Качество кода: Является ли код React хорошо структурированным, читаемым и поддерживаемым?
Пользовательский интерфейс: Чистый ли, отзывчивый и удобный для пользователя пользовательский интерфейс?
Управление состоянием: Являются ли используемые методики управления состоянием адекватными и эффективными?
Соблюдение лучших практик: Следует ли кандидат лучшим практикам React и JavaScript/TypeScript?
Сервер Node.js:

Функциональность: Корректно ли сервер обрабатывает операции CRUD для фильмов?
Обработка ошибок: Корректно ли сервер обрабатывает ошибки и предоставляет информативные ответы об ошибках?
Дизайн API: Логично ли и в соответствии с RESTful принципами спроектировано API?
Качество кода: Хорошо ли организован код на стороне сервера и следует ли он лучшим практикам Node.js?
Общая оценка:

Скорость: В будущем будем работать не на качество, а на скорость и количество, решение может быть не идеальным с точки зрения написания кода, но должно хорошо работать
Полнота: Реализованы ли все требуемые функции и конечные точки?
Тестирование: Было ли проведено тщательное тестирование приложения и сервера, и работает ли оно без критических ошибок?
Креативность: Реализовал ли кандидат какие-либо дополнительные функции или улучшения, выходящие за рамки основных требований?