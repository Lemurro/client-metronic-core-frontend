/**
 * Получение кода
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.getCode = function () {
    lemurro.lightajax.get(true, app.config.apiUrl + 'auth/code', {
        'auth_id': $('#js-auth__get-form').find('input[name="auth_id"]').val()
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            if (result.data.hasOwnProperty('message')) {
                console.log(result.data.message, 'AuthCode');
            }

            var formCode = $('#js-auth__check-form');

            formCode.find('.js-timer').show();
            formCode.find('.js-timer__count').text('60');
            formCode.find('.js-resend').hide();

            lemurro.auth._runTimer();

            $('#js-auth__get-form').hide();
            formCode.show();
        }
    });
};