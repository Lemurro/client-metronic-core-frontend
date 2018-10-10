/**
 * Вход под указанным пользователем
 *
 * @param {integer} id ИД пользователя
 *
 * @version 10.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.loginByUser = function (id) {
    swal({
        title            : 'Войти под пользователем?',
        html             : '',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да',
        cancelButtonText : 'Нет'
    }).then(function (result) {
        if (result.value) {
            bootstrap.lightajax.post(true, pathServerAPI + 'users/login_by_user', {
                user_id: id
            }, function (result) {
                bootstrap.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    bootstrap.showErrors(result.errors);
                } else {
                    localforage.setItem('lastSessionID', bootstrap.sessionID, function () {
                        localforage.setItem('sessionID', result.data.session, function () {
                            location.replace(location.origin);
                        });
                    });
                }
            });
        }
    });
};