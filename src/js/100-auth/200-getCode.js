/**
 * Получение кода
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.getCode = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'auth/code', {
        'auth_id': $('#js-auth__get-form').find('input[name="auth_id"]').val()
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            var formCode = $('#js-auth__check-form');

            formCode.find('.js-timer').show();
            formCode.find('.js-timer__count').text('60');
            formCode.find('.js-resend').hide();

            auth._runTimer();

            $('#js-auth__get-form').hide();
            formCode.show();
        }
    });
};