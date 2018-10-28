/**
 * Проверка сессии
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.check = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'auth/check', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.initPage();
        }
    });
};