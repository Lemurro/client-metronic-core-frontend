/**
 * Проверка сессии
 *
 * @version 17.08.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.check = function () {
    bootstrap.lightajax.get(false, pathServerAPI + 'auth/check', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            $('.js-user__auth-id').text(result.data.user.auth_id);

            bootstrap.initPage();
        }
    });
};