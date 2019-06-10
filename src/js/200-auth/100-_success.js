/**
 * Проверка сессии и загрузка данных о пользователе прошли успешно
 *
 * @version 10.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._success = function () {
    // Установим идентификатор пользователя в верхнем меню
    $('.js-user__auth-id').text(lemurro.userinfo.auth_id);

    // Приложение успешно стартовало
    app.started = true;

    // Скрываем более ненужный оверлей прелоадера
    $('#js-preloader-overlay').hide();

    // Запустим инициализацию приложения и передадим callback для выполнения
    app.init(lemurro._loadPage);
};