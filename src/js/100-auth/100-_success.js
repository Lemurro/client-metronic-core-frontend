/**
 * Проверка сессии и загрузка данных о пользователе прошли успешно
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._success = function () {
    var body = $('body');

    // Установим идентификатор пользователя в верхнем меню
    $('.js-user__auth-id').text(lemurro.userinfo.auth_id);

    // Если пользователь админ, включим все возможности
    if (lemurro.userinfo.admin) {
        body.find('.js-role').removeClass('d-none');
    } else {
        for (var pageID in lemurro.userinfo.roles) {
            if (lemurro.userinfo.roles.hasOwnProperty(pageID)) {
                for (var i in lemurro.userinfo.roles[pageID]) {
                    if (lemurro.userinfo.roles[pageID].hasOwnProperty(i)) {
                        var access = lemurro.userinfo.roles[pageID][i];

                        body.find('.js-role__' + pageID + '--' + access).removeClass('d-none');
                    }
                }
            }
        }
    }

    // Приложение успешно стартовало
    app.started = true;

    // Скрываем более ненужный оверлей прелоадера
    $('#js-preloader-overlay').hide();

    // Запустим инициализацию приложения
    app.init();

    // Загрузим страницу определённую маршрутизатором
    lemurro._loadPage();
};