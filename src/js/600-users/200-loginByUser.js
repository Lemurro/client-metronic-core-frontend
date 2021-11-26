/**
 * Вход под указанным пользователем
 *
 * @param {string} id ИД пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.loginByUser = function (id) {
    if (id === '1') {
        swal('Внимание!', 'Входить под пользователем с id=1 запрещено', 'warning');
    } else {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'users/login_by_user',
            {
                user_id: id,
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    localforage.setItem('lastSessionID', lemurro.sessionID, function () {
                        localforage.setItem('sessionID', result.data.session, function () {
                            location.replace(location.origin);
                        });
                    });
                }
            }
        );
    }
};
