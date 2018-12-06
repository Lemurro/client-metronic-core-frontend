/**
 * Проверка введенного кода
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.checkCode = function () {
    var browser = bowser.getParser(window.navigator.userAgent);

    lemurro.lightajax.post(true, app.config.apiUrl + 'auth/code', {
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
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            $('#js-auth__check-form').find('input[name="auth_code"]').val('');

            lemurro.showErrors(result.errors);
        } else {
            localforage.setItem('sessionID', result.data.session, function () {
                lemurro.sessionID = result.data.session;
                lemurro.authScreen('hide');
                lemurro.auth.check();
            });
        }
    });
};