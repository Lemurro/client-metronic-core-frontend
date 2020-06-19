/**
 * Получим информацию о пользователе
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.auth._getUser = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'user', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.userinfo = result.data;
            lemurro.auth._success();
        }
    });
};
