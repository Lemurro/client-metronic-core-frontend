/**
 * Запуск ядра
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.start = function () {
    // Инициализация роутера
    lemurro.router = new Navigo(location.protocol + '//' + location.host, app.config.router.useHash, app.config.router.hash);

    // Подключаем маршруты
    lemurro.router.on(app.routes.pages);

    // Маршрут не найден
    lemurro.router.notFound(app.routes.notFound);

    // Подключаем хуки
    lemurro.router.hooks({
        after: function () {
            if (app.started) {
                lemurro._loadPage();
            } else {
                lemurro.init();
            }
        }
    });

    // Запускаем роутер
    lemurro.router.resolve();
};