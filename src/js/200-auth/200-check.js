/**
 * Проверка сессии
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.check = function () {
    lemurro.lightajax.get(true, app.config.apiUrl + 'auth/check', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.lightajax.preloader('hide');

            lemurro.showErrors(result.errors);
        } else {
            lemurro.auth._getUser();
        }
    });
};