/**
 * Покажем форму входа
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.authScreen = function (action) {
    var modal = $('#js-auth');

    if (action === 'show') {
        $('#js-auth__get-form').show();
        $('#js-auth__check-form').hide();

        modal.find('input[type="text"]').val('');

        modal.modal({
            backdrop: 'static',
            keyboard: false
        });
    } else {
        modal.modal('hide');
    }
};