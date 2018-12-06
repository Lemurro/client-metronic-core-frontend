/**
 * Покажем форму входа
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.authScreen = function (action) {
    var modal = $('#js-auth');

    if (action === 'show') {
        document.title = app.config.title;

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