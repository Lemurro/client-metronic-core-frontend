/**
 * Получение кода
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
lemurro.auth.getCode = function () {
    var authID = $('#js-auth__get-form').find('input[name="auth_id"]').val();

    if (isEmpty(authID)) {
        Swal.fire('Внимание!', 'Необходимо указать логин', 'warning');

        return;
    }

    lemurro.lightajax.get(
        true,
        pathServerAPI + 'auth/code',
        {
            auth_id: authID,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
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
        }
    );
};
