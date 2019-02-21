/**
 * Получим информацию о пользователе
 *
 * @version 21.02.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._getUser = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'user', {}, function (result) {
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