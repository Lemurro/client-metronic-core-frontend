/**
 * Проверка сессии
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.check = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'auth/check', {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            $('.js-user__auth-id').text(result.data.user.auth_id);

            bootstrap.initPage();
        }
    });
};