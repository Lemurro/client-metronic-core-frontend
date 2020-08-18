/**
 * Инициализация
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 18.08.2020
 */
lemurro.users._initEmailField = function () {
    var form = $('#js-user-form');

    var authIdField = form.find('input[name="auth_id"]');
    var emailField = form.find('input[name="email"]');

    if (app.config.auth.type === 'email') {
        emailField.prop('readonly', true);

        authIdField.on('input', function () {
            emailField.val(authIdField.val());
        });
    } else {
        emailField.prop('readonly', false);
    }
};
