/**
 * Вход под указанным пользователем
 *
 * @param {string} id ИД пользователя
 *
 * @version 30.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.loginByUser = function (id) {
    if (id === '1') {
        swal('Внимание!', 'Входить под пользователем с id=1 запрещено', 'warning');
    } else {
        swal({
            title            : 'Войти под пользователем?',
            html             : '',
            type             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Да',
            cancelButtonText : 'Нет'
        }).then(function (result) {
            if (result.value) {
                lemurro.lightajax.post(true, pathServerAPI + 'users/login_by_user', {
                    user_id: id
                }, function (result) {
                    lemurro.lightajax.preloader('hide');

                    if (result.hasOwnProperty('errors')) {
                        lemurro.showErrors(result.errors);
                    } else {
                        localforage.setItem('lastSessionID', lemurro.sessionID, function () {
                            localforage.setItem('sessionID', result.data.session, function () {
                                location.replace(location.origin);
                            });
                        });
                    }
                });
            }
        });
    }
};