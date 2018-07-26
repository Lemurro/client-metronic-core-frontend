/**
 * Проверка введенного кода
 *
 * @version 26.07.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.checkCode = function () {
    var browser = bowser.getParser(window.navigator.userAgent);

    bootstrap.lightajax.post(true, pathServerAPI + 'auth/code', {
        'auth_id'    : $('#js-auth__get-form').find('input[name="auth_id"]').val(),
        'auth_code'  : $('#js-auth__check-form').find('input[name="auth_code"]').val(),
        'device_info': {
            uuid        : 'WebApp',
            platform    : browser.parsedResult.os.name,
            version     : browser.parsedResult.os.version,
            manufacturer: browser.parsedResult.browser.name,
            model       : browser.parsedResult.browser.version
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