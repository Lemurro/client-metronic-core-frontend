/**
 * Инициируем форму входа
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 24.10.2019
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
    getForm.find('input[name="auth_id"]').addClass(strings.getForm.inputClass);

    checkForm.find('.js-auth__auth-code').html(strings.checkForm.inputLabel);
    checkForm.find('.js-auth__repeat').html(strings.checkForm.repeatMessage);

    authForm.find('.js-code-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '9999'
        }).mask(element);
    });

    authForm.find('.js-phone-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '+7 (999) 999-99-99'
        }).mask(element);
    });
};