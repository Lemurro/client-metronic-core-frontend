/**
 * Список пользователей
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 27.09.2019
 */
lemurro.users.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'users', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.users.showData(result.data);

            localforage.getItem('lastSessionID', function (err, value) {
                if (value !== null) {
                    $('#js-users__items').find('.js-login-by-user').hide();
                }
            });
        }
    });
};