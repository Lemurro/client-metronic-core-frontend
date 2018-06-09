/**
 * Проверка введенного кода
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.checkCode = function () {
    bootstrap.lightajax.post(true, pathServerAPI + 'auth/code', {
        'auth_id'    : $('#js-auth__get-form').find('input[name="auth_id"]').val(),
        'auth_code'  : $('#js-auth__check-form').find('input[name="auth_code"]').val(),
        'device_info': {
            uuid        : 'WebApp',
            platform    : bowser.osname,
            version     : bowser.osversion,
            manufacturer: bowser.name,
            model       : bowser.version
        }
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            $('#js-auth__check-form').find('input[name="auth_code"]').val('');

            bootstrap.showErrors(result.errors);
        } else {
            localforage.setItem('sessionID', result.data.session, function () {
                bootstrap.sessionID = result.data.session;
                bootstrap.authScreen('hide');
                auth.check();
            });
        }
    });
};