/**
 * Инициируем форму входа
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 29.11.2020
 */
lemurro._initAuthForm = function () {
    var authForm  = $('#js-auth');
    var getForm   = $('#js-auth__get-form');
    var checkForm = $('#js-auth__check-form');

    var authType = app.config.auth.type;
    if (!app.config.auth.strings.hasOwnProperty(authType)) {
        authType = 'mixed';
    }

    var strings = app.config.auth.strings[authType];

    getForm.find('.js-auth__auth-id').html(strings.getForm.inputLabel);
    checkForm.find('.js-auth__auth-code').html(strings.checkForm.inputLabel);
    checkForm.find('.js-auth__repeat').html(strings.checkForm.repeatMessage);

    getForm.find('input[name="auth_id"]')
        .on('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                lemurro.auth.getCode();
            }
        })
        .addClass(strings.getForm.inputClass);

    checkForm.find('input[name="auth_code"]')
        .on('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                lemurro.auth.checkCode();
            }
        });

    authForm.find('.js-code-mask').each(function () {
        Inputmask({
            mask: '9999',
        }).mask(this);
    });

    authForm.find('.js-phone-mask').each(function () {
        Inputmask({
            mask: '+7 (999) 999-99-99',
        }).mask(this);
    });
};