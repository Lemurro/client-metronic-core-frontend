/**
 * Получим информацию о пользователе
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._getUser = function () {
    lemurro.lightajax.get(false, app.config.apiUrl + 'user', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.lightajax.preloader('hide');

            lemurro.showErrors(result.errors);
        } else {
            lemurro.lightajax.preloader('hide');

            lemurro.userinfo = result.data;

            lemurro.auth._success();
        }
    });
};