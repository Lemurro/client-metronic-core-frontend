/**
 * Вход под указанным пользователем
 *
 * @param {integer} id ИД пользователя
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.loginByUser = function (id) {
    swal({
        title            : 'Войти под пользователем?',
        html             : '',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да',
        cancelButtonText : 'Нет'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, app.config.apiUrl + 'users/login_by_user', {
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
};