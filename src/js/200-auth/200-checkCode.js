/**
 * Проверка введенного кода
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.auth.checkCode = function () {
    var authID = $('#js-auth__get-form').find('input[name="auth_id"]').val();
    var authCode = $('#js-auth__check-form').find('input[name="auth_code"]').val();

    if (isEmpty(authID)) {
        swal('Внимание!', 'Необходимо указать логин', 'warning');

        return;
    }

    if (isEmpty(authCode)) {
        swal('Внимание!', 'Необходимо указать код для входа', 'warning');

        return;
    }

    var browser = bowser.getParser(window.navigator.userAgent);

    lemurro.lightajax.post(
        true,
        pathServerAPI + 'auth/code',
        {
            auth_id: authID,
            auth_code: authCode,
            device_info: {
                uuid: 'WebApp',
                platform: browser.parsedResult.os.name,
                version: browser.parsedResult.os.version,
                manufacturer: browser.parsedResult.browser.name,
                model: browser.parsedResult.browser.version,
            },
            geoip: lemurro.auth._geoip,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                $('#js-auth__check-form').find('input[name="auth_code"]').val('');

                lemurro.showErrors(result['errors']);
            } else {
                localforage.setItem('sessionID', result['data']['session'], function () {
                    lemurro.sessionID = result['data']['session'];
                    lemurro.authScreen('hide');
                    lemurro.auth.check();
                });
            }
        }
    );
};
