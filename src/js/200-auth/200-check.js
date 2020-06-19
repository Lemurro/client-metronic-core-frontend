/**
 * Проверка сессии
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.auth.check = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'auth/check', {}, function (result) {
        if (lemurro.hasErrors(result)) {
            lemurro.lightajax.preloader('hide');

            lemurro.showErrors(result.errors);
        } else {
            lemurro.auth._getUser();
        }
    });
};
