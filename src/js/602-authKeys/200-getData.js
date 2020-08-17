/**
 * Список
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 17.08.2020
 */
lemurro.authKeys.getData = function () {
    var container = $('#js-auth-keys');

    var message = container.find('.js-auth-keys__message');
    var table = container.find('.js-auth-keys__table');
    var items = container.find('.js-auth-keys__items');

    message.hide();
    table.hide();
    items.html('');

    lemurro.lightajax.get(true, pathServerAPI + 'auth/keys', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result['errors']);
        } else {
            if (result['data'].length > 0) {
                if (!lemurro.authKeys.hasOwnProperty('_template')) {
                    lemurro.authKeys._template = Template7.compile($('#js-tpl-auth-keys__items').html());
                }

                table.show();
                items.html(lemurro.authKeys._template(result['data']));
            } else {
                message.show();
            }
        }
    });
};
